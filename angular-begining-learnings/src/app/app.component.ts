import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-begining-learnings';
  count=0;
  counter(op : string)
  {
    op === 'plus' ? this.count++ : this.count--;
  }
}
