import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(  private http: HttpClient) { }

  login(name:any, password:any): Observable<any>{
    let userData = {
        name,
        password
    }
    return this.http.post('http://localhost:3000/login', userData)
  }
}
