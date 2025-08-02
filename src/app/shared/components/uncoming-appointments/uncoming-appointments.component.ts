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
  colors = [
    'linear-gradient(45deg, #3498db, #457b9d)',
    'linear-gradient(45deg, #a8dadc, #5bb9bc)',
    'linear-gradient(45deg, #f1faee, rgb(156, 179, 156))',
  ];

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

cancelAppointment(id:any){
        this.dashboardService.cancelAppointment(id).subscribe((doc)=> {
    //  this.doctor = doc;
       //console.log("رزرو برای دکتر با شناسه:", this.doctor);
    });
}
}
