import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FuseNavigationModule } from './../../../../../components/navigation/navigation.module';
import { FuseSharedModule } from './../../../../../shared.module';
import { NavbarVerticalStyle2Component } from './style-2.component';

@NgModule({
  declarations: [NavbarVerticalStyle2Component],
  imports: [
    MatButtonModule,
    MatIconModule,

    FuseSharedModule,
    FuseNavigationModule,
  ],
  exports: [NavbarVerticalStyle2Component],
})
export class NavbarVerticalStyle2Module {}