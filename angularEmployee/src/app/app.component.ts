import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee';
  type:string;
  flag=false;
  flag1=false
  
  show(){
     
      if(this.type=="table")
      {
        console.log(this.type)
          this.flag=true;
          this.flag1=false;
      }else{
        console.log(this.type)
          this.flag1=true;
          this.flag=false
      }
  }
}
