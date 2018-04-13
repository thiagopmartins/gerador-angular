
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from "@clr/angular";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LojaComponent } from './dashboard/loja/loja.component';
import { LojaService } from './dashboard/loja/loja.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LojaComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [LojaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
