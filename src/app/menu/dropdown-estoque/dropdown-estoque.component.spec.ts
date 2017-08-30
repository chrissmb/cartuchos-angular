import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownEstoqueComponent } from './dropdown-estoque.component';

describe('DropdownEstoqueComponent', () => {
  let component: DropdownEstoqueComponent;
  let fixture: ComponentFixture<DropdownEstoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownEstoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
