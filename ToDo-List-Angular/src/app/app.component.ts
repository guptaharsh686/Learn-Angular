import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo-List-Angular';

  list : any[] = []

  addTask(item:string){
    if(item !== '')
    {
      this.list.push({
        id:this.list.length,
        name: item
      });
      console.warn(this.list);
    }
    

  }


  removeTask(id:number){
    this.list = this.list.filter(item => item.id !== id)
  }
}
