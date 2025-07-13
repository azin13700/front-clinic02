import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MedicalRecordsPreviewComponent } from 'src/app/shared/components/medical-records-preview/medical-records-preview.component';
import { MessagesPreviewComponent } from 'src/app/shared/components/messages-preview/messages-preview.component';
import { QuickActionsComponent } from 'src/app/shared/components/quick-actions/quick-actions.component';
import { UncomingAppointmentsComponent } from 'src/app/shared/components/uncoming-appointments/uncoming-appointments.component';
import { UserInfoCardComponent } from 'src/app/shared/components/user-info-card/user-info-card.component';
import { DashboardService } from '../../core/services/dashboard.service';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports:[
  CommonModule,
    DashboardRoutingModule,
    UserInfoCardComponent,UncomingAppointmentsComponent
    ,MedicalRecordsPreviewComponent , MessagesPreviewComponent,
  QuickActionsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   fullName: string = '';
  role: string = '';
  user:any;

  constructor(private router: Router, private dashboardService :DashboardService ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      // const payload = JSON.parse(atob(token.split('.')[1]));
      // this.fullName = payload.name;
      // this.role = payload.role;

      const NAME_CLAIM = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name";
      const ROLE_CLAIM = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";

      const payload = JSON.parse(atob(token.split('.')[1]));
      this.fullName = payload[NAME_CLAIM];
      this.role = payload[ROLE_CLAIM];
    }



       this.dashboardService.getUserInfo().subscribe({
      next: (res) => {
        console.log(res);
        this.user =res;


      },
      error: (err) => {

      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }



}
