import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JqueryService } from './shared/jquery.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { MenuComponent } from './menu/menu.component';
import { PaginaInvalidaComponent } from './pagina-invalida/pagina-invalida.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PaginaInvalidaComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    JqueryService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
