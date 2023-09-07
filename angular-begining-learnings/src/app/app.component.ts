import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-begining-learnings';
  users = ['Anil','Bhaskar','Sam','Peter','Bruce']
  userDetails = [
    {
      name:'Bhaskar',
      email:'Bhaskar@test.com',
      phone:1111
    },
    {
      name:'Sam',
      email:'Sam@test.com',
      phone:2222
    },
    {
      name:'Peter',
      email:'Peter@test.com',
      phone:6666
    }
  ]
}
