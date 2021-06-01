import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCadastrarItemComponent } from './editar-cadastrar-item.component';

describe('EditarCadastrarItemComponent', () => {
  let component: EditarCadastrarItemComponent;
  let fixture: ComponentFixture<EditarCadastrarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCadastrarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCadastrarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
