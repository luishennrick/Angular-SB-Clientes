import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoPrestadoFormComponent } from './servico-prestado-form.component';

describe('ServicoPrestadoFormComponent', () => {
  let component: ServicoPrestadoFormComponent;
  let fixture: ComponentFixture<ServicoPrestadoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoPrestadoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoPrestadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
