import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css',
  '../../../node_modules/bootstrap/dist/css/bootstrap.css',
]
})
export class StudentsComponent {

  students=[
    {name:"samir",age:23,email:"samir@gmail.com"},
    {name:"samar",age:23,email:"samar@gmail.com"},
    {name:"samy",age:39,email:"samy@gmail.com"},
    {name:"raneen",age:23,email:"raneen@gmail.com"},
    {name:"sara",age:27,email:"sara@gmail.com"},
    {name:"ahmed",age:23,email:"ahmed@gmail.com"},
    {name:"menna",age:32,email:"menna@gmail.com"},
    {name:"layla",age:24,email:"layla@gmail.com"},
    {name:"cairokee",age:36,email:"cairokee@gmail.com"}
  ]






}
