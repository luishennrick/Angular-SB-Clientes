import { ActivatedRoute, Router, Params } from '@angular/router';
import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';

import { Cliente } from '../clientes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  id: number;
  value: any;

  constructor( private service : ClientesService,
               private router: Router,
               private activatedRoute: ActivatedRoute) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id){
      this.service
         .getClientesById(this.id)
         .subscribe(
           Response =>
              this.cliente = Response,
              errorResponse =>  this.cliente = new Cliente()

         )
     }

          })


  }


  onSubmit(){
    if(this.id){

      this.service
        .atualizar(this.cliente)
        .subscribe(response =>{
          this.success = true;},
          errorResponse =>{
            this.errors = ['Erro ao atualizar'];
          })

      } else {

    this.service
       .salvar(this.cliente)
       .subscribe( Response => {
         this.success = true;
         this.cliente = Response;
       } , errorResponse =>{
         this.success = false;
         this.errors = errorResponse.error.errors;
       } )

      }
  }

  voltarLista(){
    this.router.navigate(['/clientes-lista'])

  }

}
