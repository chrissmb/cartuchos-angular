import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Cartucho } from '../cartucho';
import { CartuchosService } from '../cartuchos.service';

@Component({
  selector: 'app-cartucho-form',
  templateUrl: './cartucho-form.component.html',
  styleUrls: ['./cartucho-form.component.css']
})
export class CartuchoFormComponent implements OnInit, OnDestroy {

  cartucho: Cartucho;
  inscricao: Subscription;
  formulario: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartuchosService: CartuchosService,
    private formBuilder: FormBuilder
  ) { }

  onSubmit() {
    if (this.formulario.valid) {
      this.cartuchosService.saveCartucho(this.cartucho)
        .subscribe(cartucho => {
          this.router.navigate([`/cartuchos/${cartucho.id}`]);
          this.cartuchosService.sendRefreshCartuchos();
        });
    }
  }

  ngOnInit() {
    this.inscricao = this.route.data.subscribe(
      data => this.cartucho = data.cartucho
    );
    if (this.cartucho == null) {
      this.cartucho = new Cartucho(null, '', 0, true);
    }
    this.formulario = this.formBuilder.group({
      descricao: [null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]],
      ativo: [null, Validators.required]
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
