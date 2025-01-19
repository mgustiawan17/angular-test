import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import * as baseurl from './../../pages/baseurl';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post(baseurl.baseUrl + 'login', { email, password }, { headers })
      .pipe(
        map((response: any) => {
          console.log('Response from server:', response);

          if (response.token) {
            localStorage.setItem('authToken', response.token); // Simpan token di localStorage
          }

          return response;
        }),
        catchError((error) => {
          console.error('Error from server:', error);
          return throwError(() => error); // Return error agar bisa ditangani di komponen
        })
      );
  }

  getToken(): string | null {
    return localStorage.getItem('authToken'); // Ambil token dari localStorage
  }
}
