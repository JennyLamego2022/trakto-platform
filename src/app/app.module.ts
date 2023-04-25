import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AberturaComponent } from './componentes/abertura/abertura.component';
import { HeaderComponent } from './componentes/header/header.component';
import { DatePipe } from '@angular/common';
import { MaterialDidaticoComponent } from './componentes/material-didatico/material-didatico.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AberturaComponent,
    HeaderComponent,
    MaterialDidaticoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DatePipe,
    HttpClientModule,
   


  ],
  providers: [DatePipe, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
