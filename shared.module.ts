import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{HttpClientModule} from '@angular/common/http';
import{AppService} from '../app.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,HttpClientModule],
 providers:[AppService]
})
export class SharedModule { }
