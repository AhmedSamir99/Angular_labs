import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  @Input() ArrayOfStudents:{name:string, age:string}[] = [];

  display(){
    console.log(this.ArrayOfStudents);
  }


}
