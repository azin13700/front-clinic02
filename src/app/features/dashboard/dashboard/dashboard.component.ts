import { Component } from '@angular/core';
import { HeaderDashboardComponent } from '../header/header-dashboard.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderDashboardComponent,FooterComponent,RouterOutlet,SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

}
