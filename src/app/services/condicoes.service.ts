import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Condicao} from "../models/condicoes.model";

@Injectable({
  providedIn: 'root'
})
export class CondicaoService {

  constructor(private http: HttpClient) { }

  get():Observable<any> {
    return this.http.get(environment.url + '/Condicoes');
  }

  getById(id: Condicao):Observable<any> {
    return this.http.get(environment.url + '/Condicoes/' + id);
  }

  save(condicao : Condicao):Observable<any> {
    return this.http.post(environment.url + '/Condicoes' , condicao);
  }

  update(condicao : Condicao):Observable<any> {
    console.log('TRATAMENTOOO')
    return this.http.put(environment.url + `/Condicoes/${condicao.id}`  , condicao);
  }

  delete(id):Observable<any> {
    return this.http.delete(environment.url + '/Condicoes/' + id);
  }
}
