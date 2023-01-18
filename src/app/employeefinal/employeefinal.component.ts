import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employeefinal',
  templateUrl: './employeefinal.component.html',
  styleUrls: ['./employeefinal.component.css']
})
export class EmployeefinalComponent {

  employees:any;
  constructor(private common:CommonService){
    this.employees = common.employees;
  }

}
