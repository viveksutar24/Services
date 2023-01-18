import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';

  employees = [
    {no:1,name:"Vivek",city:"Kolhapur",age:24},
    {no:2,name:"Aniket",city:"Nashik",age:25},
    {no:3,name:"Rushi",city:"Pune",age:20},
    {no:4,name:"Pratik",city:"Mumbai",age:23},
    {no:5,name:"Raj",city:"Haidrabad",age:22}
  ]

}
