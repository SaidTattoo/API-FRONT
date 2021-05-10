import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
public archivos:any = []
public previsualizacion:any
  createUser = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    imagen: new FormControl()
  });
  constructor(public userService: UserServiceService, private sanitizer : DomSanitizer) { 
   
  }

  ngOnInit(): void {
  }
  onSubmit(){
    const formularioDatos = new FormData()
    this.archivos.forEach((archivo:any) => {
        console.log(archivo)
        formularioDatos.append('myFile',archivo )
        this.userService.uploadImage(formularioDatos).subscribe((resp:any) =>{
          console.log(resp)
        })
    });


    console.log(this.createUser.value)
    
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
