import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../service/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  imgLogin:string = "assets/man.png"

  loginForm = new FormGroup({
    correo: new FormControl(),
    password: new FormControl()
  });

  constructor(public authService: AuthServiceService,public router :Router) { }
  hide = true;
  ngOnInit(): void {
    if(localStorage.getItem('token') === undefined){
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/']);
    }
  }

  onSubmit(){
    

    this.authService.login(this.loginForm.value.correo, this.loginForm.value.password).subscribe((data:any) => {
      console.log(data)
      if(data.codeResponse === 200){
        localStorage.setItem('token',data.token)
        this.router.navigate(['dashboard']);
        //todo: redireccionar al dashboard
      }else{
        // TODO: limpiar los campos y volver a desabilitar el btn
      }
    })
  }
}
