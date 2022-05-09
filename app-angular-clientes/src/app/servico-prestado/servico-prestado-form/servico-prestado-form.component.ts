import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/clientes';
import { ClientesService } from '../../clientes.service'
import { servicoPrestado } from '../servico-prestado';
import { ServicoPrestadoService } from '../../servico-prestado.service'

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes : Cliente[] = []
  servico: servicoPrestado;
  success:boolean = false
  errors: String[]


  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadoService
  ) {
    this.servico = new servicoPrestado
   }

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe( response => this.clientes = response)
  }

  onSubmit(){
    this.service.salvar(this.servico)
    .subscribe(response => {
      this.success = true
      this.servico = new servicoPrestado()
      }, errorResponse =>{

      this.success = false;
      this.errors = errorResponse.error.errors;

      })
  }
}
