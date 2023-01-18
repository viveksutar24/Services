import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent {


  employees:any;
  constructor(private common:CommonService) {
    this.employees = common.employees
  }

}



