import { BrowserModule } from '@angular/platform-browser';
import {UsersModule} from './users/users.module';
import {NgModule} from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SigninComponent} from './signin/signin.component';
import {FormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import{MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import{ReactiveFormsModule} from'@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CscService } from './csc.service';
import {MatSelectModule} from '@angular/material/select';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { DialogComponent } from './dialog/dialog.component';
import{SharedModule} from './shared/shared.module';
import { RouterModule } from '@angular/router';
import{AppService} from './app.service';
import{MatSnackBar, MatSnackBarModule}  from '@angular/material/snack-bar';
import { from } from 'rxjs';
import { CallpromiseComponent } from './callpromise/callpromise.component';
import { InterceptComponent } from './intercept/intercept.component';
import { HiComponent } from './hi/hi.component';
import { HelloComponent } from './hello/hello.component';
import { GoodbyeComponent } from './goodbye/goodbye.component';
//import { GppdComponent } from './gppd/gppd.component';
import { EmployeesComponent } from './employees/employees.component';
import { EditComponent } from './pages/employees/edit/edit.component';
import { CrudComponent } from './crud/crud.component';
import { CrudServiceService } from './crud-service.service';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

//import{httpInterceptProviders} from './http-interceptor';
//import { SignUpComponent } from "./sign-up/sign-up.component";


//import{AuthGuard} from './auth.guard';






@NgModule({
  declarations: [
    AppComponent,

   SigninComponent,
   RegisterComponent,
   PageNotFoundComponent,
   HomeComponent,
   CustomdirectiveDirective,
   DialogComponent,

   CallpromiseComponent,
   InterceptComponent,
   HiComponent,
   HelloComponent,
   GoodbyeComponent,
   //GppdComponent,
   EmployeesComponent,
   EditComponent,
   CrudComponent,
   ReplaySubjectComponent,
   DynamicComponent,
   StarRatingComponent
  
 
  ],
  entryComponents:[SigninComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    HttpClientModule,
    MatSelectModule,
    AppRoutingModule ,
    RouterModule,
    SharedModule,
    FormsModule,
    MatSnackBarModule

    //httpInterceptProviders,

  ],
  //providers: [//AuthGuard],
  providers: [CscService,AppService,CrudServiceService],
  bootstrap: [AppComponent],schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {


 }
