import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {


  constructor(private http: HttpClient) {
  }


  forgotPassword(email: string): Observable<any> {
    return this.http.get<any>(`${environment.api}/v1/app-auth/forgot-password/${email}/web`);
  }
  resetPassword({ email, password, token }: any): Observable<any> {
    return this.http.post<any>(`${environment.api}/v1/app-auth/reset-password/${email}/${token}`, { password });
  }
  verifyToken(token: string): Observable<any> {
    return this.http.get<any>(`${environment.api}/v1/app-auth/verify-token/${token}`);
  }
}
