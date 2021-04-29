import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaClinicaComponent } from './consulta-clinica.component';

describe('ConsultaClinicaComponent', () => {
  let component: ConsultaClinicaComponent;
  let fixture: ComponentFixture<ConsultaClinicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaClinicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
