import { Component, OnInit } from '@angular/core';
import {​ FormControl, FormGroup, FormBuilder, Validators }​ from '@angular/forms';
//import { CommonService } from '../common.service';
import{CscService} from '../csc.service';
import{HttpClient} from '@angular/common/http';
//import { Http, Response, Headers } from '@angular/http';




@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {

 public fname: any;
 public lname:any;
 public email:any;
 public password: any;
 public pnum:any;
 public country1="";
 public mymodel="";
 public mymodel1="";
 public mymodel2="";
 public picker="";
 
stateInfo: any[] = [];
countryInfo: any[] = [];
cityInfo: any[] = [];
data2:any="";
err:any="";
 // allUser: Object;
  //isEdit=false;
  
 /* userObj={
    fname:' ',
    lname:' ',
    email:' ',
    password:' ',
    pnum:' ',
    mymodel:' ',
    mymodel1:' '

  }
  */

    // constructor(private formBuilder: FormBuilder,private country:CscService,private commonService:CommonService) {}
     constructor(private formBuilder: FormBuilder,private country:CscService) {}
     confirmationString:string = "New product has been added";
     isAdded: boolean = false;
     productObj:object = {};

     registerForm = new FormGroup({
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null, [Validators.required, Validators.minLength(8)]),
      pnum:new FormControl(null, [Validators.required, Validators.minLength(10)]),
      mymodel:new FormControl(null,Validators.required),
      mymodel1:new FormControl(null,Validators.required),
      mymodel2:new FormControl(null,Validators.required),
      picker:new FormControl(null,Validators.required),


     });

    submitted = false;


    
    ngOnInit(): void {
      //this.onChangeCountry(this.countryValue);
      this.getCountries();
     // this.getLatestUser();
    }

    getCountries(){
      this.country.allCountries().
      subscribe(
        data2 => {
          this.countryInfo=data2.Countries;
          console.log('Data:', this.countryInfo[0]);
        },
        err => console.log(err),
        () => console.log('complete')
      )
    }
   
    onChangeCountry(countryValue:number) {
      console.log(countryValue);
      this.country.allCountries().
      subscribe(
        data2 => {
          this.stateInfo=this.countryInfo[countryValue].States;
          console.log('Data:', this.stateInfo);
        },
        err => console.log(err),
        () => console.log('complete')
      )
    }
    
   
    onChangeState(stateValue:number) {
      this.cityInfo=this.stateInfo[stateValue].Cities;
      //console.log(this.cityInfo);
    }
    
    get f() {
      return this.registerForm.controls;
    }
    onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) { return; }
      alert("Registration successful");
    }
  }

   /* resetForm()
    {
      this.registerForm.reset();
    }
   addUser(formObj: any)
    {
      console.log(formObj)
      this.commonService.createUser(formObj).subscribe((Response)=>{
        this.getLatestUser();
        console.log('User has been added')
      })
    }
  getLatestUser() {
   this.commonService.getAllUser().subscribe((Response)=>{
     this.allUser=Response
   })
  }

  editUser(user:any){
    this.isEdit=true;
    this.userObj=user;
  }

  deleteUser(user: any)
  {
    this.commonService.deleteUser(user).subscribe(()=>{
this.getLatestUser();
  })
  }

  updateUser(){
    this.isEdit=!this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.getLatestUser();
    })
  }
    
    */
   
  
  


 


