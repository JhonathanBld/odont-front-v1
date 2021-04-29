import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCadastrarClinicaComponent } from './editar-cadastrar-clinica.component';

describe('EditarCadastrarClinicaComponent', () => {
  let component: EditarCadastrarClinicaComponent;
  let fixture: ComponentFixture<EditarCadastrarClinicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCadastrarClinicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCadastrarClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
