import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';

import { Cliente } from '../clientes';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;

  constructor( private service : ClientesService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
       .salvar(this.cliente)
       .subscribe( Response => {
         console.log(Response);
       } )
  }

}
