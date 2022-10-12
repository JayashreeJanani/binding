import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }
  getEmployees(){
    return[
      {
        "id": 1,
        "name": "crescent",
        "age":25
      },
      {
        "id": 2,
        "name": "Bandon",
        "age":25
      },
      {
        "id": 3,
        "name": "Elena",
        "age" :30
      },
    ];
  }
}
