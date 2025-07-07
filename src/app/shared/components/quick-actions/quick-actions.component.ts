import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-actions',
    standalone:true,
     imports: [CommonModule],
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss']
})
export class QuickActionsComponent {
    constructor(private router: Router) {}

  goToBooking() {
    this.router.navigate(['/appointments/new']); // مسیر رزرو که بعداً تعریف می‌کنیم
  }

}
