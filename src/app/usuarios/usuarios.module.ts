import { UsuariosService } from './usuarios.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UsuariosComponent],
  providers: [
    UsuariosService,
    FormBuilder
  ]
})
export class UsuariosModule { }
