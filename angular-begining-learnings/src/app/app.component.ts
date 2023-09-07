import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-begining-learnings';

  display = false;

  toggle(){
    this.display = !this.display;
  }
}
