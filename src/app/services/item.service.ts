import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Item} from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  get():Observable<any> {
    return this.http.get(environment.url + '/Itens');
  }

  getById(id: Item):Observable<any> {
    return this.http.get(environment.url + '/Itens/' + id);
  }

  save(item : Item):Observable<any> {
    return this.http.post(environment.url + '/Itens' , item);
  }

  update(item : Item):Observable<any> {
    return this.http.put(environment.url + `/Itens/${item.id}` , item);
  }

  delete(id):Observable<any> {
    return this.http.delete(environment.url + '/Itens/' + id);
  }

}
