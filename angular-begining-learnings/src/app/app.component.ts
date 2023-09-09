import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-begining-learnings';

  loginform = new FormGroup(
    {user : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)])}
  )

  loginuser(){
    console.warn(this.loginform.value)
  }

  get user(){
    return this.loginform.get('user')
  }

  get password(){
    return this.loginform.get('password')
  }
}
