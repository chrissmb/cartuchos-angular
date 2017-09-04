import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatuchoFormComponent } from './catucho-form.component';

describe('CatuchoFormComponent', () => {
  let component: CatuchoFormComponent;
  let fixture: ComponentFixture<CatuchoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatuchoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatuchoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
