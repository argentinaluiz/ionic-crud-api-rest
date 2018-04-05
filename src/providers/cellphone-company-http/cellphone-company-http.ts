import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CellphoneCompanyHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CellphoneCompanyHttpProvider {

private baseUrl = 'http://localhost:3000/cellphone_companies';

  constructor(public http: HttpClient) {
    console.log('Hello CellphoneCompanyHttpProvider Provider');
  }

  list(){
    return this.http.get<Array<any>>(this.baseUrl);
  }

}
