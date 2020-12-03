import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppDirectivesModule } from "@simples/app-directives";

@NgModule({
  imports: [CommonModule, HttpClientModule, AppDirectivesModule],

  exports:[AppDirectivesModule]
})
export class AppSharedModule { }
