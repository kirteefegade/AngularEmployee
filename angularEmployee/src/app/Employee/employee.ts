export class Employee{
     empno:number;
     ename:string;
     salary:number;
     desg:string;
     bonus:number;
     total:number;

     constructor(empno?:number,ename?:string,salary?:number,desg?:string,bonus?:number,total?:number){
        this.empno=empno;
        this.ename=ename;
        this.salary=salary;
        this.desg=desg;
        this.bonus=bonus;
        this.total=total;

     }
}