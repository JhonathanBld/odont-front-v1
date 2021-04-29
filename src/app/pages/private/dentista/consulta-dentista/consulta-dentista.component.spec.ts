import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDentistaComponent } from './consulta-dentista.component';

describe('ConsultaDentistaComponent', () => {
  let component: ConsultaDentistaComponent;
  let fixture: ComponentFixture<ConsultaDentistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaDentistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
