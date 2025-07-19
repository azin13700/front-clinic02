import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DoctorListComponent } from 'src/app/components/doctor-list/doctor-list.component';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { DashboardComponent } from 'src/app/features/dashboard/dashboard.component';
import { MessagesPreviewComponent } from '../components/messages-preview/messages-preview.component';

@Component({
  selector: 'app-header',
  encapsulation: ViewEncapsulation.None,
  standalone   : true,
    imports:[RouterModule ,CommonModule, DashboardComponent,DoctorListComponent ,MessagesPreviewComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent   implements OnInit{

     fullName: string = '';
    role: string = '';
    user:any;
    isLogin :boolean ;
    isShowDoctorList:boolean ;

    constructor(private router: Router, private dashboardService :DashboardService,
       private _changeDetectorRef: ChangeDetectorRef
     ) {}
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
      this.isLogin = true;
       this._changeDetectorRef.markForCheck();
    }


  }


    logout() {
    localStorage.removeItem('token');
          this.isLogin = false;
           this._changeDetectorRef.markForCheck();
    this.router.navigate(['/login']);
  }

    showDoctorList() {
      this.isShowDoctorList = true;

    }

}
