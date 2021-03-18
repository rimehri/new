import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {AdminModule} from './admin/admin.module';

import {InternauteModule} from './internaute/internaute.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {AccountModule} from './account/account.module';
import {ClientModule} from './client/client.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({

  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AdminModule,

    AppRoutingModule,
    SharedModule,
    InternauteModule,
    NgbModule,
    BrowserAnimationsModule,
    BrowserModule,
    ClientModule,
    AccountModule

  ],
  declarations: [
    AppComponent,



  ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
