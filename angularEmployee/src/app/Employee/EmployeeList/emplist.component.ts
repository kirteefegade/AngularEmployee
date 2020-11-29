import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employeeService';

@Component({
    selector:"emp-list",
    templateUrl:"./emplist.component.html",
    styleUrls:["./emplist.component.css"]
})
export class EmployeeListComponent implements OnInit{
    employees:Employee[];
    constructor(private eservice:EmployeeService){

    }
    ngOnInit(){
        this.employees=this.eservice.getAllEmployees();
        for(let i=0;i<this.employees.length;i++){
            this.employees[i].bonus=this.employees[i].salary/10;
            this.employees[i].total=this.employees[i].salary+this.employees[i].bonus;
        }
    }
}