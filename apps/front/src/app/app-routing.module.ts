import { TestModule } from './../../../../libs/pages/src/lib/test/test.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('@simples/pages').then((m) => m.AboutModule)
  },

  {
    path: 'tests',
    loadChildren: () => import('@simples/pages').then((m) => m.TestModule)
  },
  // {
  //   path: 'wip',
  //   loadChildren: () =>
  //     import('./work-in-progress/work-in-progress.module').then(
  //       (m) => m.WorkInProgressModule
  //     )
  // },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
