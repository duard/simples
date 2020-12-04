import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppSharedModule } from '@simples/app-shared';
import { AppTestsModule } from '@simples/app-tests';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, AppSharedModule, TestRoutingModule, AppTestsModule],
})
export class TestModule {}
