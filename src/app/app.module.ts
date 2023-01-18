import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeefinalComponent } from './employeefinal/employeefinal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeedetailComponent,
    EmployeefinalComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
