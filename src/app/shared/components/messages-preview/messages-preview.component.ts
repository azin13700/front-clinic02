import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Message } from '../../interfaces/Message';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-messages-preview',
  standalone:true,
   imports: [CommonModule],
  templateUrl: './messages-preview.component.html',
  styleUrls: ['./messages-preview.component.scss']
})
export class MessagesPreviewComponent implements OnInit  {
    constructor(private dashboardService: DashboardService) {}
messages: Message[] = [];

  ngOnInit(): void {
    this.dashboardService.getRecentMessages().subscribe(data => {
    this.messages = data;

 });
  }

  openAllMessages() {
    // بعداً مسیر‌دهی کن به صفحه کامل پیام‌ها
    alert('در آینده به صفحه پیام‌ها می‌ره');
  }


}
