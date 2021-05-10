import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../service/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  imgLogin:string = "assets/man.png"

  loginForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl()
  });

  constructor(public authService: AuthServiceService) { }
  hide = true;
  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(this.loginForm.value.name, this.loginForm.value.password).subscribe((data:any) => {
      if(data.codeResponse === 200){
        //todo: redireccionar al dashboard
      }else{
        // TODO: limpiar los campos y volver a desabilitar el btn
      }
    })
  }
}
