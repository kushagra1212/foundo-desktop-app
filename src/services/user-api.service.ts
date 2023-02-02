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


  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    const params = {
      email,
      password,
    };
    return this.http.post<any>(`${environment.api}/v1/user/signin`, params);
  }
  signup({ email, password, firstName, lastName }: any): Observable<any> {
    const params = {
      email,
      password,
      firstName,
      lastName
    };
    return this.http.post<any>(`${environment.api}/v1/user/signup`, params);
  }
}
