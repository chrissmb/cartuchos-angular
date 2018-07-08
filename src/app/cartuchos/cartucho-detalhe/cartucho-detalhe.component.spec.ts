import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartuchoDetalheComponent } from './cartucho-detalhe.component';

describe('CartuchoDetalheComponent', () => {
  let component: CartuchoDetalheComponent;
  let fixture: ComponentFixture<CartuchoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartuchoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartuchoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
