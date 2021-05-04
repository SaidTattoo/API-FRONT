import { Component, OnInit } from '@angular/core';
import { VentasService } from '../service/ventas.service';
import '../modelo/ventasModel';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  constructor(public ventasService :VentasService) { }

  data:VentasModel;
  user: FormGroup;
  dataForm;
  message 
  alertMensaje= false
  ngOnInit(): void {
    this.user = new FormGroup({
      name: new FormControl(''),
      image: new FormControl('')
    });
    this.getVentas()
  }

  guardarData(){
    console.log('guardarData')
    this.ventasService.guardarData(this.user.value).subscribe( (res:any) => {
      console.log(res)
      if(res.codeResponse === 200){
        this.message = res.data.message
      }else{
        this.alertMensaje = true
        this.message = res.data.message
      }
      this.dataForm = this.user.value
    })
  }

  getVentas(){
      this.ventasService.getVentas().subscribe( (resp:VentasModel) => {
        this.data = resp
      })
  }
}
