import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError } from 'rxjs';
import * as baseurl from './../../pages/baseurl';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) {}

  Register(userData: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post(baseurl.baseUrl + 'register', JSON.stringify(userData), { headers })
      .pipe(
        map((response: any) => {
          console.log('Response from server:', response);
          return response;
        }),
        catchError((error) => {
          console.error('Error from server:', error);
          throw error;
        })
      );
  }
}
