import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Message } from '../../interfaces/Message';
import { DashboardService } from 'src/app/core/services/dashboard.service';
export interface Message2 {
  id: number;
  senderName: string;
  content: string;
  date: Date;
  read: boolean;
  type: 'نوبت' | 'پزشکی' | 'مالی' | 'عمومی';
}

@Component({
  selector: 'app-messages-preview',
  standalone:true,
   imports: [CommonModule],
  templateUrl: './messages-preview.component.html',
  styleUrls: ['./messages-preview.component.scss']
})
export class MessagesPreviewComponent implements OnInit  {
    constructor(private dashboardService: DashboardService) {}
messages: Message2[] = [];
 colors = [
    'linear-gradient(45deg, #3498db, #457b9d)',
    'linear-gradient(45deg, #a8dadc, #5bb9bc)',
    'linear-gradient(45deg, #f1faee, rgb(156, 179, 156))',
  ];

    searchTerm: string = '';

  get filteredMessages(): Message2[] {
    return this.messages.filter(msg =>
      msg.senderName.includes(this.searchTerm) ||
      msg.content.includes(this.searchTerm)
    );
  }

  viewMessage(msg: Message2) {
    // اینجا می‌تونی دیالوگ بزنی یا به صفحه جدا هدایت کنی
    console.log('نمایش پیام:', msg);
  }

  ngOnInit(): void {
    this.dashboardService.getRecentMessages().subscribe(data => {
    this.messages = data.$values;

 });
  }

  openAllMessages() {
    // بعداً مسیر‌دهی کن به صفحه کامل پیام‌ها
    alert('در آینده به صفحه پیام‌ها می‌ره');
  }


}
