import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return [
      {
        name:'anil',
        age:28,
        email:'anil@test.com'
      },
      {
        name:'sam',
        age:25,
        email:'anil@test.com'
      },
      {
        name:'peter',
        age:26,
        email:'anil@test.com'
      }
    ]
  }
}
