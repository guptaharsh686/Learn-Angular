import { Component } from '@angular/core';
import {UsersdataService} from './Services/usersdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API-In-Angular';
  users:any
  constructor(private userdata:UsersdataService){
    userdata.users().subscribe((data) => {
      this.users = data;
      console.warn(data)
    })

  }

  getuserformdata(data:any){
    //console.warn(data)
    this.userdata.saveusers(data).subscribe((res) => {
      console.warn(res)
    });
  }
}
