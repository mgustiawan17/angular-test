import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import * as baseurl from '../baseurl';

@Injectable()
export class ModulService {
  constructor(private http: HttpClient) {}

  createCheckin(data: any): Observable<any> {
    return this.http.post(baseurl.baseUrl + 'modul', data);
  }

  getModul(): Observable<any> {
    return this.http
      .get(baseurl.baseUrl + 'modul')
      .pipe(map((response: any) => response));
  }

  deleteCheckin(id: number): Observable<any> {
    return this.http.delete(baseurl.baseUrl + `modul/${id}`);
  }
}
