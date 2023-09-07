import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-begining-learnings';

  users = [
    {
      name:'Anil',
      phone:1111,
      socialAcc:[
        'FB',
        'Insta',
        'Gmail'
      ] 
    },
    {
      name:'Sam',
      phone:2222,
      socialAcc:[
        'FB',
        'Insta',
        'YT'
      ]
    },
    {
      name:'Peter',
      phone:3333,
      socialAcc:[
        'FB',
        'LINKDIN',
        'Gmail'
      ]
    },
    {
      name:'Bruce',
      phone:4444,
      socialAcc:[
        'FB',
        'Insta',
        'Gmail'
      ]
    },
  ]
}
