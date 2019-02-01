import { CoreModule } from './core/core.module';
import { DialogService } from './dialog.service';

import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SendComponent } from './dashboard/send/send.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SendComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
