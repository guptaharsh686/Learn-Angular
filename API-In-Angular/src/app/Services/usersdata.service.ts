import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor(private http:HttpClient)
   { }

   users()
   {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
   }


   saveusers(data:any){
    return this.http.post('https://jsonplaceholder.typicode.com/post',data)
   }
}
