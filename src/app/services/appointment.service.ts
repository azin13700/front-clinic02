import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

    private apiUrl: string ='https://localhost:7190/api/Doctor';

  constructor(private http: HttpClient,) { }


}
