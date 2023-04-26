import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:any;
  constructor(public myService:StudentsService){ }
  ngOnInit(): void {
    this.myService.GetAllStudents().subscribe(
      {
        next:(data)=>{
          this.students = data;
        },
        error:(err)=>{console.log(err)}
      }
    )
  }
  deleteStudent(id: number) {
    if (window.confirm('Are you sure you want to delete this student?')) {
      this.myService.DeleteStudentById(id).subscribe(() => {
        this.students = this.students.filter((u: any) => u.id !== id);
      });
    }
  }


}


