import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http: HttpClient) { }

  getAllUsers(){
    return this.http.get("http://localhost:3000/user")
  }
  getUserById(id:any){
    return this.http.get("http://localhost:3000/getuser/"+id)
  }
  uploadImage(imageData:any){
    return this.http.post("http://localhost:3000/upload",imageData)
  }
}
