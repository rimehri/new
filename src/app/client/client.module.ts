import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeClientComponent } from './home-client/home-client.component';
import { SharedModule } from './shared/shared.module';
import { PageHomeProjectComponent } from './page-home-project/page-home-project.component';
import { ApresHomePageComponent } from './apres-home-page/apres-home-page.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';


@NgModule({
  declarations: [HomeClientComponent, PageHomeProjectComponent, ApresHomePageComponent, DashboardClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,

  ],
  exports:[PageHomeProjectComponent]
})
export class ClientModule { }
