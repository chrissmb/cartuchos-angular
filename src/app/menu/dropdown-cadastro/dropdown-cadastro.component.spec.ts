import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCadastroComponent } from './dropdown-cadastro.component';

describe('DropdownCadastroComponent', () => {
  let component: DropdownCadastroComponent;
  let fixture: ComponentFixture<DropdownCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
