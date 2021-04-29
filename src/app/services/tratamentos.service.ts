import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Tratamento} from "../models/tratamentos.model";

@Injectable({
  providedIn: 'root'
})
export class TratamentoService {

  constructor(private http: HttpClient) { }

  get():Observable<any> {
    return this.http.get(environment.url + '/tratamentos');
  }

  getById(id: Tratamento):Observable<any> {
    return this.http.get(environment.url + '/tratamentos/' + id);
  }

  save(tratamento : Tratamento):Observable<any> {
    return this.http.post(environment.url + '/tratamentos' , tratamento);
  }

  update(tratamento : Tratamento):Observable<any> {
    console.log('TRATAMENTOOO')
    return this.http.put(environment.url + `/tratamentos/${tratamento.id}`  , tratamento);
  }

  delete(id):Observable<any> {
    return this.http.delete(environment.url + '/tratamentos/' + id);
  }
}
