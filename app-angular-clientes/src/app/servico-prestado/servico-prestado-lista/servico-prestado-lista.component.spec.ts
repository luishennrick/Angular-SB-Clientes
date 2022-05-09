import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoPrestadoListaComponent } from './servico-prestado-lista.component';

describe('ServicoPrestadoListaComponent', () => {
  let component: ServicoPrestadoListaComponent;
  let fixture: ComponentFixture<ServicoPrestadoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoPrestadoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoPrestadoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
