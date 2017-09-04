import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatuchoDetalheComponent } from './catucho-detalhe.component';

describe('CatuchoDetalheComponent', () => {
  let component: CatuchoDetalheComponent;
  let fixture: ComponentFixture<CatuchoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatuchoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatuchoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
