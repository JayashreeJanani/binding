import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  template:`<h2>Employee List</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>
    
  </ul>
  
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees:any=[];
  constructor(private list:EmployeeServiceService) { }

  ngOnInit(): void {
    this.employees=this.list.getEmployees()

  }

}
