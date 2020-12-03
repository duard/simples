import { AppTestsModule } from '@simples/app-tests';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppSharedModule } from '@simples/app-shared';

import { TesteComponent } from './teste/teste.component';

@NgModule({
  imports: [CommonModule, AppSharedModule, AppTestsModule],
  declarations: [TesteComponent], exports:[TesteComponent]
})
export class PagesModule {}
