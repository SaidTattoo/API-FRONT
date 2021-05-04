import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class VentasService {

  //el servicio es el quie se comunica con la api
  constructor(public http : HttpClient) { }

  getVentas(){
    return this.http.get('http://localhost:3000/')
  }
  guardarData(data){
    return this.http.post('http://localhost:3000/', data)
  }
}
