import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'simples-testComponentStore',
  templateUrl: './testComponentStore.component.html',
  styleUrls: ['./testComponentStore.component.scss'],
  providers: [StoreService]
})
export class TestComponentStoreComponent implements OnInit {
  plate = "";
  vm$ = this.store.vm$;

  constructor(private store: StoreService) { }

  ngOnInit(): void { }

  onSubmit($event: Event) {
    $event.preventDefault();
    this.store.addCarToParkingLot(this.plate);
  }

  addPlate($event: Event) {
    const target = $event.target as HTMLButtonElement;

    if (target.nodeName === "BUTTON") {
      this.plate = target.innerHTML;
    }
  }
}
