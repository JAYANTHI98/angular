import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {


element:ElementRef
constructor(private el:ElementRef) { 
el.nativeElement.style.backgroundColor="black";
el.nativeElement.style.color="white";
this.element=el;
}
ngOnInit()
{
 this.element.nativeElement.innerText+="-rendered by custom directive"
}
}
