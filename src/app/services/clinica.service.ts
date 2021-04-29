import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Clinica} from "../models/clinica.model";

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  constructor(private http: HttpClient) { }

  get():Observable<any> {
    return this.http.get(environment.url + '/clinicas');
  }

  getById(id: Clinica):Observable<any> {
    return this.http.get(environment.url + '/clinicas/' + id);
  }

  save(clinica : Clinica):Observable<any> {
    return this.http.post(environment.url + '/clinicas' , clinica);
  }

  update(clinica : Clinica):Observable<any> {
    return this.http.put(environment.url + `/clinicas/${clinica.id}` , clinica);
  }

  delete(id):Observable<any> {
    return this.http.delete(environment.url + '/clinicas/' + id);
  }

}
