import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-user-info-card',
    standalone:true,
      imports: [CommonModule],
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss']
})
export class UserInfoCardComponent implements OnInit {

    constructor(private dashboardService: DashboardService) {}

  fullName ='';
  eamil = '';
  role = '';

user:any;
  ngOnInit(): void {
   const token = localStorage.getItem('token');
    if (token) {


      const NAME_CLAIM = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name";
      const EMAIL_CLAIM = "http://schemas.microsoft.com/ws/2008/06/identity/claims/eamil";
      const ROLE_CLAIM = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";

      const payload = JSON.parse(atob(token.split('.')[1]));
      this.fullName = payload[NAME_CLAIM];
      this.eamil = payload[EMAIL_CLAIM];
      this.role =payload[EMAIL_CLAIM];

    }

    this.dashboardService.getUserInfo().subscribe(data => {
    this.user = data;
   
  });

  }

}
