import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(  private http: HttpClient) { }

  login(correo:any, password:any): Observable<any>{
    let userData = {
        correo,
        password
    }
    return this.http.post('http://localhost:3000/api/auth/login', userData)
  }
  register(nombre:any, correo:any , password:any){
    let userData = {
      nombre,
      correo,
      password,
      rol:'USER_ROLE'
    }
    return this.http.post('http://localhost:3000/api/usuarios', userData)
  }
}
