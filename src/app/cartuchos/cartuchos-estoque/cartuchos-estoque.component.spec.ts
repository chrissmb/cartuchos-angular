import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartuchosEstoqueComponent } from './cartuchos-estoque.component';

describe('CartuchosEstoqueComponent', () => {
  let component: CartuchosEstoqueComponent;
  let fixture: ComponentFixture<CartuchosEstoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartuchosEstoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartuchosEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
