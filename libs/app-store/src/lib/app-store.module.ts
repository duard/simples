import { NgModule } from '@angular/core';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { CustomSerializer, effects, reducers } from '.';

export const metaReducers: MetaReducer<unknown>[] = !environment.production
  ? [storeFreeze]
  : [];
@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),

    environment.production ? [] : AkitaNgDevtools,
    AkitaNgRouterStoreModule,
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer,
    },
  ],
})
export class AppStoreModule {
  constructor() {
    console.log(' NGRX Loaded', effects);
  }
}
