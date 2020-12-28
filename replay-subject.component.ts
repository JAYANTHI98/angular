import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {
 

  //[x: string]: boolean;
  private subject=new ReplaySubject();
  subscriberMessages= Array<string>();
  buffer:number=0;

  //create subscriber
  private subscriber1:any;
  subscriber1Messages=Array<string>();
  subscribed1:boolean=false;

message:string='';
  //subscriber1Messages: any;

subscribe(_subscriber: any){
  this.subscribed1=true;
  this.subscriber1=this.subject.subscribe(
    data =>{
      //do something with data
       this.sendToSubscribers(data);

    }

  );
}

unSubscribe(subscriber:any)
{
  this.subscriber1.unsubscribe();
  this.subscribed1=false;
}

sendMessage(message:any)
{
  this.subject.next(message);
  this.subscriberMessages.push(message);
  this.message='';
}

clearMessage(subscriber:any){
  this.subscriber1Messages.length=0;
}

sendToSubscribers(message:any)
{
  this.subscriber1Messages.push(message);
}

ResetBuffer(value: any){
  //set the clients to not subscribed
this.subscribed1=false;

//unsubscribe the clients
this.subscriber1?.unsubscribe();

//Reset the catched messsages
this.subscriberMessages.length=0;
this.subscriber1Messages.length=0;

//Reset the subject

//this.subject=null;
this.subject=new ReplaySubject(value);
}
 constructor() { }

 ngOnInit(): void {
}

}
