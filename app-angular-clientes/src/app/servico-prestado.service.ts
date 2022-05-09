import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { servicoPrestado } from '../app/servico-prestado/servico-prestado';
import { environment } from '../environments/environment'
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBase + '/api/servicos-prestados'

  constructor(private http: HttpClient) { }

  salvar(servicosPrestado: servicoPrestado): Observable<servicoPrestado>{
    return this.http.post<servicoPrestado>(this.apiURL, servicosPrestado)

  }

  buscar(nome: string, mes: number): Observable<ServicoPrestadoBusca[]>{

    const httpParams = new HttpParams()
    .set("nome", nome)
    .set("mes", mes? mes.toString(): '');

    const url = this.apiURL + "?" + httpParams.toString();

    console.log(url)

    return this.http.get<any>(url);
  }
}
