import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-begining-learnings';


  userDetails = [
    {
      name : 'Anil',
      email : 'abc@test.com',
    },
    {
      name : 'harsh',
      email : 'abc@test.com',
    },
    {
      name : 'nikhil',
      email : 'abc@test.com',
    },
    {
      name : 'sam',
      email : 'abc@test.com',
    },
  ]
}
