import { AppTestsModule } from '@simples/app-tests';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, TestRoutingModule, AppTestsModule],
})
export class TestModule {}
