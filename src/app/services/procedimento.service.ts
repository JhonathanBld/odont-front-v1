import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { Procedimento } from '../models/procedimento.model';

@Injectable({
  providedIn: 'root'
})
export class ProcedimentoService {

  constructor(private http: HttpClient) { }

  get():Observable<any> {
    return this.http.get(environment.url + '/Procedimentos');
  }

  getById(id: Procedimento):Observable<any> {
    return this.http.get(environment.url + '/Procedimentos/' + id);
  }

  save(condicao : Procedimento):Observable<any> {
    return this.http.post(environment.url + '/Procedimentos' , condicao);
  }

  update(condicao : Procedimento):Observable<any> {
    console.log('TRATAMENTOOO')
    return this.http.put(environment.url + `/Procedimentos/${condicao.id}`  , condicao);
  }

  delete(id):Observable<any> {
    return this.http.delete(environment.url + '/Procedimentos/' + id);
  }
}
