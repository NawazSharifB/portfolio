import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerErrorComponent } from './app-common-general/components/server-error/server-error.component';
import { NotFoundComponent } from './app-common-general/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./app-home/app-home.module').then(m => m.AppHomeModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./app-portfolio/app-portfolio.module').then(m => m.AppPortfolioModule)
  },
  {
    path: 'project-details',
    loadChildren: () => import('./app-project-details/app-project-details.module').then(m => m.AppProjectDetailsModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./app-add-edit-project/app-add-edit-project.module').then(m => m.AppAddEditProjctModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./app-about/app-about.module').then(m => m.AppAboutModule)
  },
  {
    path: 'server-error',
    component: ServerErrorComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
