import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }


  login(params:any):Observable<any>{
    debugger;
    return this.http.get('https://localhost:7157/api/Login/validateuser',{params});
  }


  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken():any {
  return  localStorage.getItem('token');
  }

  getcity():Observable<any>{

    return this.http.get('https://localhost:7157/api/Values/getcity');
  }



  insertuser(data:object):Observable<any>{
    return this.http.post('https://localhost:7157/api/Values/setuser',data);
  }
}
