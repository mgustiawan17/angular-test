import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import * as baseurl from './../../pages/baseurl';

@Injectable()
export class ExpolersService {
  constructor(private http: HttpClient) {}
  getFolder() {
    const headers = {
      'Content-Type': 'application/json',
    };

    return this.http.get(baseurl.baseUrl + 'folders', { headers }).pipe(
      map((response: any) => {
        const data = response.folders;
        console.log('Response from server:', data);
        return data;
      })
    );
  }

  getSubFolder(id: any) {
    const headers = {
      'Content-Type': 'application/json',
    };

    return this.http
      .get(baseurl.baseUrl + 'subfolders/' + id, { headers })
      .pipe(
        map((response: any) => {
          const data = response.subFolders;
          console.log('Response from server:', data);
          return data;
        })
      );
  }

  getFiles(id: any) {
    const headers = {
      'Content-Type': 'application/json',
    };

    return this.http.get(baseurl.baseUrl + 'files/' + id, { headers }).pipe(
      map((response: any) => {
        const data = response.Files;
        console.log('Response from server:', data);
        return data;
      })
    );
  }
}
