import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = 'https://localhost:7190/api';

  constructor(private http: HttpClient) {}

 getUserInfo(): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
  return this.http.get(`${this.baseUrl}/user/me`, { headers });
}


  getUpcomingAppointments(): Observable<any>  {


  const token = localStorage.getItem('token');
  const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
  return this.http.get(`${this.baseUrl}/appointment/GetUpcoming`, { headers });

  }

  getLatestRecords() : Observable<any> {
      const token = localStorage.getItem('token');
  const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    return this.http.get(`${this.baseUrl}/MedicalRecord2/latest`, {headers});
  }

  getRecentMessages() : Observable<any> {
 const token = localStorage.getItem('token');
  const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    return this.http.get(`${this.baseUrl}/Message/GetLatestMessages` ,{headers});
  }
}

