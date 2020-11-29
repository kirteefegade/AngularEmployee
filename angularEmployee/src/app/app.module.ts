import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeeService } from './Employee/employeeService';
import { EmployeeListComponent } from './Employee/EmployeeList/emplist.component';

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
