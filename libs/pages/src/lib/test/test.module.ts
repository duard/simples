import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppDirectivesModule } from '@simples/app-directives';
import { AppSharedModule } from '@simples/app-shared';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    AppDirectivesModule,
    AppSharedModule,
  ],
})
export class TestModule {}
