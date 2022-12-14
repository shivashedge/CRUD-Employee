import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';

import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl: string = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl).pipe(catchError(this.handleError));
  }
  postEmployee(employee: Employee) {
    return this.http.post<Employee>(this.baseUrl, employee);
  }
  deleteEmployee(id: string) {
    return this.http.delete<Employee>(this.baseUrl + '/' +id);
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log("client side error", error.error.message);
    } else {
      console.log("Server Side Error", error.message);
    }
    return throwError("We are unable to fetch your request ,please perform (json-server --watch db.json)");
  }
} 
