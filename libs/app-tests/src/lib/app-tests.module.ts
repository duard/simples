import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CarListComponent } from './components/car-list/car-list.component';
import { TestComponentStoreComponent } from './testComponentStore/testComponentStore.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [TestComponentStoreComponent, CarListComponent],
  declarations: [CarListComponent, TestComponentStoreComponent],
})
export class AppTestsModule {}
