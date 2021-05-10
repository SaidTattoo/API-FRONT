import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  createUser = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    imagen: new FormControl()
  });
  constructor(public userService: UserServiceService) { 
   
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.createUser.value)
      this.userService.uploadImage(this.createUser.value.imagen).subscribe((resp:any) =>{
        console.log(resp)
      })
  }
  
}
