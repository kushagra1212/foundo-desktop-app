import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  login(email: string, password: string): Observable<any> {
    const params = {
      email,
      password,
    };
    return this.httpClient.post<any>(`${environment.api}/v1/user/signin`, params);
  }
}
