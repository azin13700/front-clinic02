import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {

   private apiUrl: string ='https://localhost:7190/api/MedicalRecord';

  constructor(private _http: HttpClient,) { }

  getRecordsByUserId(userId :number): Observable<any> {
      const token = localStorage.getItem('token');
      const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
  return this._http.get<any[]>(`${this.apiUrl}/latest2` ,{ headers });
   }

}
