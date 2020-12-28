import { Component, OnInit } from '@angular/core';
import { HiComponent } from '../hi/hi.component';
import { HelloComponent } from '../hello/hello.component';
import { GoodbyeComponent } from '../goodbye/goodbye.component';


@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  say:any;

  constructor() { }

  ngOnInit(): void {
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


