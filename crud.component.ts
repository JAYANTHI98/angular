import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';



@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  [x: string]: any;
  allUser:any;
  userObj={
    name:'',
    email:'',
    password:'',
    phone:'',
    id:''
  }
  isEdit=false;
 
  constructor(private crudService:CrudServiceService ) { }
  ngOnInit(): void {
    this.getLatestUser();
  }
  addUser(formObj:any)
  {
    console.log(formObj);
    this.crudService.createUser(formObj).subscribe((response:any)=>{
      console.log("user has been added");
      this.getLatestUser();
    })
  }
  getLatestUser(){
    this.crudService.getAllUser().subscribe((response:any)=>
    {
      this.allUser=response;
    })
  }
  editUser(user:any)
  {
    this.isEdit=true;
    this.userObj=user;
  }

  deleteUser(user:any)
  {
    this.crudService.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
      
    })
  }

  updateUser(){
    this.isEdit=!this.isEdit;
    this.crudService.updateUser(this.userObj).subscribe(()=>{
      this.getLatestUser();
    })
  }

}
