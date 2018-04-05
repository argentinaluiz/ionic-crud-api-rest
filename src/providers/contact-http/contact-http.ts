import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ContactHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactHttpProvider {

  private baseUrl = 'http://localhost:3000/contacts';

  constructor(public http: HttpClient) {
    console.log('Hello ContactHttpProvider Provider');
  }

  list(){
    return this.http.get<Array<any>>(this.baseUrl);
  }

  get(id){
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  insert(contact){
    return this.http.post(this.baseUrl,contact);
  }

  edit(contact){
    return this.http.put(`${this.baseUrl}/${contact.id}`,contact);
  }

  destroy(id){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
