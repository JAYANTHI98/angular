import { state } from '@angular/animations';
import { Component,ViewContainerRef,ComponentFactoryResolver, ComponentFactory } from '@angular/core';

//import{AppService} from './app.service';

import { HiComponent } from './hi/hi.component';
import { HelloComponent } from './hello/hello.component';
import { GoodbyeComponent } from './goodbye/goodbye.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  title = 'my-app';
  opened=true;
 // dialog: any;
  //todo:any;
  say:any;
  

constructor(){}
   /*  this.appService.getTodoData(2)
     .subscribe(data=>this.todo=data)

     this.appService.putTodoData({id:2,userId:2,title:'test '})
     .subscribe(data=> console.log(data))

     this.appService.postTodoData(2)
     .subscribe(data=>this.todo=data)

     this.appService.deleteTodoData({id:2,userId:2,title:'test '})
     .subscribe(data=> console.log(data))


}
*/
ngOnInit(){
this.say=HiComponent;
}

sayHi()
{
  this.say=HiComponent;
}
sayHello()
{
  this.say=HelloComponent;
}
sayGoodbye()
{
  this.say=GoodbyeComponent;
}
}


  //constructor(
   // private vcr:ViewContainerRef,
   // private cfr:ComponentFactoryResolver
 // ){}

/*
async register()
{
  this.vcr.clear();
  const {RegisterComponent}=await import('./register/register.component');
  this.vcr.createComponent(
    this.cfr.resolveComponentFactory(RegisterComponent)
  )
}
async signin()
{
  this.vcr.clear();
  const {SigninComponent}=await import('./signin/signin.component');
  this.vcr.createComponent(
    this.cfr.resolveComponentFactory(RegisterComponent)
  )
}

openDialog() {
  this.dialog.open(AppComponent);

}
*/



  

  

  //stateInfo: any[] = [];
 //countryInfo: any[] = [];
// cityInfo: any[] = [];
 //mymodel1:any="";
 //mymodel:any="";
  


//log(state: any){
 // console.log(state)
  
//}


//const isMenuOpen = true;
 // const contentMargin = 240;

  /*onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  */

  //message="welcome"

  //constructor(public dialog:MatDialog){}
 /*openDialog()
  {
    this.dialog.open(SigninComponent);
  }


stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  //countryValue=1;
  
  ngOnInit() {
    //this.onChangeCountry(this.countryValue);
  }
 
  constructor(private country:CscService,public dialog:MatDialog) {
    this.getCountries();
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
 
  onChangeCountry(countryValue: number) {
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
  
  
 
  onChangeState(stateValue: number) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
  }
}
*/
