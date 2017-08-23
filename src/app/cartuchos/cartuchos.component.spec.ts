import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartuchosComponent } from './cartuchos.component';

describe('CartuchosComponent', () => {
  let component: CartuchosComponent;
  let fixture: ComponentFixture<CartuchosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartuchosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartuchosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
