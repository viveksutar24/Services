import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {



employees = [
  {no:1,name:"Vivek",city:"Kolhapur",age:24,education:"BSc"},
  {no:2,name:"Raj",city:"Pune",age:24,education:"BCS"},
  {no:3,name:"Aniket",city:"Nashik",age:24,education:"IT"},
  {no:4,name:"Rushi",city:"Mumbai",age:24,education:"BSc"},
]


  constructor() { }
}
