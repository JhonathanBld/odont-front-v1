import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCadastrarDentistaComponent } from './editar-cadastrar-dentista.component';

describe('EditarCadastrarDentistaComponent', () => {
  let component: EditarCadastrarDentistaComponent;
  let fixture: ComponentFixture<EditarCadastrarDentistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCadastrarDentistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCadastrarDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
