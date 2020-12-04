import { NgModule } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppSharedModule } from '@simples/app-shared';
import { AppStoreModule } from '@simples/app-store';
import {
  FuseModule,
  FuseProgressBarModule,
  FuseSharedModule,
  FuseSidebarModule,
  FuseThemeOptionsModule,
  LayoutModule,
} from '@simples/fuse';
import { PagesModule } from '@simples/pages';

import { AppComponent } from './app.component';
import { fuseConfig } from './fuse-config';
import { SampleModule } from './main/sample/sample.module';

const appRoutes: Routes = [
  {
    path: '**',
    redirectTo: 'sample',
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(appRoutes),

    AppStoreModule,

    TranslateModule.forRoot(),

    // Material moment date module
    MatMomentDateModule,

    // Material
    MatButtonModule,
    MatIconModule,

    // Fuse modules
    FuseModule.forRoot(fuseConfig),
    FuseProgressBarModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,

    // App modules
    LayoutModule,

    AppSharedModule,
    PagesModule,
    SampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
