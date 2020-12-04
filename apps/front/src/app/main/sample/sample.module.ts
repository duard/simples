import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@simples/fuse';

import { SampleComponent } from './sample.component';

const routes = [
  {
    path: 'sample',
    component: SampleComponent,
  },
];

@NgModule({
  declarations: [SampleComponent],
  imports: [
    RouterModule.forChild(routes),
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    TranslateModule,

    FuseSharedModule,
  ],
  exports: [SampleComponent],
})
export class SampleModule {}
