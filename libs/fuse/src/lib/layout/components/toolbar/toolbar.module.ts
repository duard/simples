import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { FuseSearchBarModule, FuseShortcutsModule } from '../../../components';
import { FuseSharedModule } from '../../../shared.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,

    FuseSharedModule,
    FuseSearchBarModule,
    FuseShortcutsModule,
  ],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
