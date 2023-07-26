import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  color: any;
  ChangeColor(input: { value: any; }){
    console.log(input.value);
    this.color= input.value;
    input.value="";
 
  }
}
