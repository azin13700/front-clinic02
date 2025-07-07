import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
      private apiUrl: string ='https://localhost:7190/api/auth';

  constructor(private _http: HttpClient,) { }

  login(credentials: { email: string, password: string }): Observable<any> {
  return this._http.post(`${this.apiUrl}/login`, credentials);
   }

   register(data: any): Observable<any> {
  return this._http.post(`${this.apiUrl}/register`, data);
   }
}
