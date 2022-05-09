import { ClientesService } from './../../clientes.service';
import { Cliente } from './../clientes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  Clientes: Cliente[] = [];
  clienteSelecionado! : Cliente;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service: ClientesService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getClientes()
      .subscribe( resposta => this.Clientes = resposta);
  }

  novoCadastro(){
     this.router.navigate(['/clientes-form'])
  }

  preparaDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    this.service
    .deletar(this.clienteSelecionado)
    .subscribe(
      response => this.mensagemSucesso = 'Cliente deletado!',
      erro => this.mensagemErro = 'Erro ao deletar!'
    )


  }

}
