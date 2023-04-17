import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  // student = { name: "", age: "" };
  name="";
  age="";
  inputBorderStyle = "";
  @Output() registerEvent = new EventEmitter();

  validate() {
      let  student = { name: "", age: "" };
      student.name = this.name;
      student.age = this.age;


      if(student.name.length>=3 && +student.age>20 && +student.age<40){
        this.inputBorderStyle = 'green';
        this.registerEvent.emit(student);
      }
      else{
        this.inputBorderStyle = 'red';
      }
  }

}
