import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCadastrarConsultaComponent } from './editar-cadastrar-consulta.component';

describe('EditarCadastrarConsultaComponent', () => {
  let component: EditarCadastrarConsultaComponent;
  let fixture: ComponentFixture<EditarCadastrarConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCadastrarConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCadastrarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
