import { Component, OnInit } from '@angular/core';
import {​ FormControl, FormGroup, FormBuilder, Validators }​ from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  [x: string]: any;

  public username: any;
  public password: any;
  


  constructor(private formBuilder: FormBuilder,private router:Router) {
  }
  //localStorage: any.setItem("isUserLoggedIn");
  signinForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)])
  });
  submitted = false;
  ngOnInit(): void {
  }
  get f() {
    return this.signinForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    localStorage.setItem("isUerLoggedIn","0")
    if (this.signinForm.invalid) { return; }
    alert("Login successful");
  if(this.signinForm.value.username==="xyz123@gmail.com" && this.signinForm.value.password==="xyz@123456"){
  console.log("login");
 localStorage.setItem("isUserLoggedIn","1");
 console.log("setted 1");
 this.router.navigate(["home"]);
 console.log("navigateds");
  }
 
}
//addUser(formObj: any)
//{
 // console.log(formObj)
//}
}
