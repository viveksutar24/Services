import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees:any;
  constructor(private common:CommonService) {
    this.employees = common.employees
  }
}




