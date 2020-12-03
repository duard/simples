import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppSharedModule } from '@simples/app-shared';
import { AppStoreModule } from '@simples/app-store';
import { PagesModule } from '@simples/pages';

import { AppComponent } from './app.component';

const appRoutes: Route[] = [
  { path: 'websites', loadChildren: '../websites/websites.module#WebsitesModule' },
  { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppStoreModule, RouterModule.forRoot(appRoutes), AppSharedModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
