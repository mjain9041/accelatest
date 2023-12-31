import { Injectable } from '@angular/core';
import { User } from './User';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // Add
  AddUser(data: any): Observable<any> {
    let API_URL = `${this.REST_API}/add-user`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Get all objects
  GetUsers() {
    return this.httpClient.get(`${this.REST_API}/teams`);
  }

  // Get all objects
  GetTeamDetails(teamId: any) {
    return this.httpClient.get(`${this.REST_API}/teams/${teamId}`);
  }

  // Get single object
  GetUser(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/users/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Update
  updateUser(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/users/${id}`;
    return this.httpClient
      .patch(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Delete
  deleteUser(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-user/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Error
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else if(error.status == 400){
      errorMessage = error.error.message
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //return errorMessage;
    return throwError(() => {
      return errorMessage;
    });
  }
}
