import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUsuarioComponent } from './dropdown-usuario.component';

describe('DropdownUsuarioComponent', () => {
  let component: DropdownUsuarioComponent;
  let fixture: ComponentFixture<DropdownUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
