import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JqueryService } from './shared/jquery.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    JqueryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
