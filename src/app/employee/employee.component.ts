import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee !: Employee;
  constructor() { }

  ngOnInit(): void {
    console.log(this.employee)
  }

}
