import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPessoaComponent } from './consulta-tratamento.component';

describe('ConsultaPessoaComponent', () => {
  let component: ConsultaPessoaComponent;
  let fixture: ComponentFixture<ConsultaPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
