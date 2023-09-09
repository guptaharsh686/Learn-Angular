import { Component } from '@angular/core';
import {UserdataService} from './../Services/userdata.service'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  users:any;
  constructor(private userdata : UserdataService){
    this.users = userdata.users();
  }
}
