import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCadastrarPessoaComponent } from './editar-cadastrar-condicao.component';

describe('EditarCadastrarPessoaComponent', () => {
  let component: EditarCadastrarPessoaComponent;
  let fixture: ComponentFixture<EditarCadastrarPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCadastrarPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCadastrarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
