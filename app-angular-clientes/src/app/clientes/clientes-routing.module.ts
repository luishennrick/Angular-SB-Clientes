import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

const routes: Routes = [
  {path: 'clientes-form', component: ClientesFormComponent },
  {path: 'clientes-form/:id', component: ClientesFormComponent },
  {path: 'clientes-lista', component: ClientesListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
