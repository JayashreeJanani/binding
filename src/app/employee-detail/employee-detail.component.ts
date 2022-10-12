import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-detail',
  template:`<h2>Employee Details</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.id}}.{{employee.name}}-{{employee.age}}</li>
  </ul>`,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees:any=[];
  constructor(private list:EmployeeServiceService) { }

  ngOnInit(): void {
    this.employees=this.list.getEmployees();
  }

}
