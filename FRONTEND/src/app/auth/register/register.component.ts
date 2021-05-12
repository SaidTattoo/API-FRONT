import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  imgLogin:string = "assets/man.png"
  loginForm = new FormGroup({
    correo: new FormControl(),
    nombre: new FormControl(),
    correoConfirm: new FormControl(),
    passwordConfirm: new FormControl(),
    password: new FormControl()
  });
  constructor(public authService: AuthServiceService,public router :Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.register(
      this.loginForm.value.nombre,
      this.loginForm.value.correo,
       this.loginForm.value.password      
    ).subscribe((data:any) => {
      console.log(data)
      if(data.codeResponse === 200){
        localStorage.setItem('token',data.token)
        this.router.navigate(['/']);
        //todo: redireccionar al dashboard
      }else{
        // TODO: limpiar los campos y volver a desabilitar el btn
      }
    })
  }
}
