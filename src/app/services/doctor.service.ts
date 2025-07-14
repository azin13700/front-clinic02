import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

      private apiUrl: string ='https://localhost:7190/api/Doctor';

  constructor(private _http: HttpClient,) { }

  getAllDoctors(): Observable<any> {
      const token = localStorage.getItem('token');
      const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
  return this._http.get<any[]>(`${this.apiUrl}/GetAll` ,{ headers });
   }

  getDoctorById(doctorId :string): Observable<any> {
      const token = localStorage.getItem('token');
      const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
  return this._http.get<any[]>(`${this.apiUrl}/GetAll` ,{ headers });
   }
     bookAppointment(data: any) {
  return this._http.post('/api/appointments', data);
}

}
