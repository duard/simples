import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppSharedModule } from '@simples/app-shared';
import { AppStoreModule } from '@simples/app-store';

import { MatMomentDateModule } from "@angular/material-moment-adapter";


import {
  FuseModule,
  FuseProgressBarModule,
  FuseSharedModule,
  FuseSidebarModule,
  FuseThemeOptionsModule,
} from '@simples/fuse';
import { PagesModule } from '@simples/pages';

import { AppComponent } from './app.component';
import { fuseConfig } from './fuse-config';

const appRoutes: Route[] = [
  {
    path: 'websites',
    loadChildren: '../websites/websites.module#WebsitesModule',
  },
  {
    path: 'dashboard',
    loadChildren: '../dashboard/dashboard.module#DashboardModule',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppStoreModule,
    RouterModule.forRoot(appRoutes),

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

    AppSharedModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
