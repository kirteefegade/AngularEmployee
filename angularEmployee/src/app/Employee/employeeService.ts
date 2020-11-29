import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable()
export class EmployeeService{
    employees=[
        new Employee(1,"kirtee",50000,"developer"),
        new Employee(2,"mansi",45000,"lawyer"),
        new Employee(3,"abc",40000,"admin"),
        new Employee(4,"xyz",50000,"sales manager")
    ]
    
    getAllEmployees():Employee[]{
        return this.employees
    }
    
}