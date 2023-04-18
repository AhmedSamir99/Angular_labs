import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students/students.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


let routes:Routes=[
  {path:"",component:RegistrationComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"students",component:StudentsComponent},
  {path:"students/:id",component:StudentDetailsComponent},
  {path:"**",component:ErrorComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    StudentDetailsComponent,
    StudentsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
