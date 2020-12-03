import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import type { Car } from '@simples/api-interfaces';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

import { ParkingLotService } from './parking-lot.service';

// The state model
export interface ParkingState {
  cars: Car[]; // render the table with cars
  error: string; // show the error when try to add cars
  loading: boolean; // used to enable/disable elements in the UI while fetching data
}

@Injectable()
export class StoreService extends ComponentStore<ParkingState> {
  constructor(private parkingLotService: ParkingLotService) {
    super({
      cars: [],
      error: "",
      loading: false
    });
  }

  // SELECTORS
  readonly vm$: Observable<ParkingState> = this.select(state => state);

  // UPDATERS
  readonly updateError = this.updater((state: ParkingState, error: string) => {
    return {
      ...state,
      error
    };
  });

  readonly setLoading = this.updater(
    (state: ParkingState, loading: boolean) => {
      return {
        ...state,
        loading
      };
    }
  );

  readonly updateCars = this.updater((state: ParkingState, car: Car) => {
    return {
      ...state,
      error: "",
      cars: [...state.cars, car]
    };
  });

  // EFFECTS
  readonly addCarToParkingLot = this.effect((plate$: Observable<string>) => {
    return plate$.pipe(
      switchMap((plate: string) => {
        this.setLoading(true);
        return this.parkingLotService.add(plate).pipe(
          tap({
            next: car => {
              this.setLoading(false);
              return this.updateCars(car);
            },
            error: e => {
              {
                this.setLoading(false);
                return this.updateError(e);
              }
            }
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });
}
