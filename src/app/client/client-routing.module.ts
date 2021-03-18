import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageHomeProjectComponent} from './page-home-project/page-home-project.component'
import {ApresHomePageComponent} from './apres-home-page/apres-home-page.component'
import {DashboardClientComponent} from './dashboard-client/dashboard-client.component'

const routes: Routes = [

  {
    path: '',
    component: ApresHomePageComponent
  },



  {
    path: 'projet',
    component: PageHomeProjectComponent
  },
  {
    path: 'dashboard',
    component: DashboardClientComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
