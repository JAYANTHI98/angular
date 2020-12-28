import {NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {SigninComponent} from './signin/signin.component';
import { CommonModule } from '@angular/common';
import{CscService} from './csc.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{HomeComponent}from './home/home.component';
import { AuthGuard } from './auth.guard';
import { DialogComponent } from './dialog/dialog.component';
import { InterceptComponent } from './intercept/intercept.component';
import { CallpromiseComponent } from './callpromise/callpromise.component';
import { HiComponent } from './hi/hi.component';
import { HelloComponent } from './hello/hello.component';
import { GoodbyeComponent } from './goodbye/goodbye.component';
import { SharedModule } from './shared/shared.module';
import { EmployeesComponent } from './employees/employees.component';
import { EditComponent } from './pages/employees/edit/edit.component';
import{CrudComponent} from './crud/crud.component';
import { ReplaySubject } from 'rxjs';
import { DynamicComponent } from './dynamic/dynamic.component';
import { StarRatingComponent } from './star-rating/star-rating.component';




const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
//{ path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule)},
  {path:'register', component: RegisterComponent},
  {path:'dialog',component:DialogComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},

  {path:'interceptor',component:InterceptComponent},
  {path:'callpromise',component:CallpromiseComponent},
  {path:'hi',component:HiComponent},
  {path:'hello',component:HelloComponent},
  {path:'goodbye',component:GoodbyeComponent},
  {path:'employee' ,component:EmployeesComponent},
  {path:'employee/employeeEdit/:id',component:EditComponent},
  {path:'employee/Add/:id',component:EditComponent},
  {path:'crud',component:CrudComponent} ,
  {path:'replay-subject',component:ReplaySubject},
  {path:'dynamic',component:DynamicComponent},
  {path:'star-rating',component:StarRatingComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule,SharedModule]
})
export class AppRoutingModule { }
