import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  hide = true;
  public archivos:any = []
  public previsualizacion:any
  imgLogin:string = "assets/man.png"
  loginForm = new FormGroup({
    correo: new FormControl(),
    nombre: new FormControl(),
    correoConfirm: new FormControl(),
    passwordConfirm: new FormControl(),
    password: new FormControl(),
    img:new FormControl()
  });
  constructor(public authService: AuthServiceService,public router :Router,private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.register(
      this.loginForm.value.nombre,
      this.loginForm.value.correo,
       this.loginForm.value.password,
       this.previsualizacion
    ).subscribe((data:any) => {
      console.log(data)
      if(data.codeResponse === 200){
        this.router.navigate(['']);
        //todo: redireccionar al dashboard
      }else{
        // TODO: limpiar los campos y volver a desabilitar el btn
      }
    })
  }

  capturarFile(file:any){
    const archivoCapturado = file.target.files[0]
    this.extraerBase64(archivoCapturado).then((image:any) => {
      this.previsualizacion = image.base
      console.log(image)
    })
    this.archivos.push(archivoCapturado)
    console.log(archivoCapturado)
  }
  extraerBase64 = async ($event:any) => new Promise((resolve, reject) => {
    const unsafeImg = window.URL.createObjectURL($event)
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg)
    const reader = new FileReader()
    reader.readAsDataURL($event)
    reader.onload = () => {
      resolve({
        base:reader.result
      })
    }
    reader.onerror = error => {
      resolve({
        Blob:$event,
        image,
        base:null
      })
    }
  })
}
