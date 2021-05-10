import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateUserComponent } from '../modal/create-user/create-user.component';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Acction'];
  dataSource:any
  constructor(public userService : UserServiceService,public dialog: MatDialog ) { 
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((resp:any) => {
      console.log(resp)
      this.dataSource = resp.data
    })
  }

  crearUsuario(){
     const dialogRef = this.dialog.open(CreateUserComponent, {
        width: '550px',
        height: '550px',
      })
    }


  verMas(id:any){
    this.userService.getUserById(id).subscribe((resp:any)=> {
      console.log(resp)
    })
    
  }
  editar(id:any){
    this.userService.getUserById(id).subscribe((resp:any)=> {
      console.log(resp)
    })
  }
  eliminar (id:any){
    this.userService.getUserById(id).subscribe((resp:any)=> {
      console.log(resp)
    })
  }
}
