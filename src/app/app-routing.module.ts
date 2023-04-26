import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AddNewStudentComponent } from './components/add-new-student/add-new-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ErrorsComponent } from './components/errors/errors.component';

const routes: Routes = [
  {path:'', component:StudentsComponent},
  {path:'students', component:StudentsComponent},
  {path:'students/:id', component:StudentDetailsComponent},
  {path:'addstudent', component:AddNewStudentComponent},
  {path:'students/:id/edit', component:UpdateStudentComponent},
  {path:'**', component:ErrorsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
