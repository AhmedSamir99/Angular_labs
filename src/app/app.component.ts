import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day3';

  // students:object[]=[];
  students:{name:string, age:string}[] = [];


  storeStudent(student:any){

    // console.log(student);

    this.students.push(student);
    
    console.log(this.students);


  }
}
