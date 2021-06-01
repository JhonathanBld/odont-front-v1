import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaConsultaComponent } from './pesquisa-consulta.component';

describe('PesquisaConsultaComponent', () => {
  let component: PesquisaConsultaComponent;
  let fixture: ComponentFixture<PesquisaConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
