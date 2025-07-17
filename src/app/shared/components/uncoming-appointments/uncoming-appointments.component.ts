import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../interfaces/Appointment';
import { CommonModule } from '@angular/common';
import { DashboardService } from 'src/app/core/services/dashboard.service';
@Component({
  selector: 'app-uncoming-appointments',
     standalone:true,
       imports: [CommonModule],
  templateUrl: './uncoming-appointments.component.html',
  styleUrls: ['./uncoming-appointments.component.scss']
})
export class UncomingAppointmentsComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}
  appointments: Appointment[] = [];

  ngOnInit(): void {
    // داده تستی تا وقتی بک‌اند وصل نشده
    // this.appointments = [
    //   {
    //     id: 1,
    //     doctorName: 'دکتر شفیعی',
    //     date: '2025-07-03',
    //     time: '14:30',
    //     status: 'رزرو شده'
    //   },
    //   {
    //     id: 2,
    //     doctorName: 'دکتر کیانی',
    //     date: '2025-07-05',
    //     time: '10:00',
    //     status: 'رزرو شده'
    //   }
    // ];

 this.dashboardService.getUpcomingAppointments().subscribe(data => {
    this.appointments = data.$values;

 });

}
}
