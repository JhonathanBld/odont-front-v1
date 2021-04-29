import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Pessoa} from "../models/pessoa.model";

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private http: HttpClient) { }

  get():Observable<any> {
    return this.http.get(environment.url + '/pessoas');
  }

  getById(id: Pessoa):Observable<any> {
    return this.http.get(environment.url + '/pessoas/' + id);
  }

  save(pessoa : Pessoa):Observable<any> {
    return this.http.post(environment.url + '/pessoas' , pessoa);
  }

  update(pessoa : Pessoa):Observable<any> {
    return this.http.put(environment.url + `/pessoas/${pessoa.id}` , pessoa);
  }

  delete(id):Observable<any> {
    return this.http.delete(environment.url + '/pessoas/' + id);
  }

}
