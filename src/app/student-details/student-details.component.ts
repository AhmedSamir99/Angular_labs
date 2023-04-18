import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css',
  '../../../node_modules/bootstrap/dist/css/bootstrap.css',

]
})
export class StudentDetailsComponent {

  Id=0;
  constructor(myRoute: ActivatedRoute){

    console.log(myRoute.snapshot.params["id"]);
    this.Id=myRoute.snapshot.params["id"];

  }

}
