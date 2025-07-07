import { Component, OnInit } from '@angular/core';
import { MedicalRecord } from '../../interfaces/MedicalRecord';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DashboardService } from 'src/app/core/services/dashboard.service';
@Component({
  selector: 'app-medical-records-preview',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './medical-records-preview.component.html',
  styleUrls: ['./medical-records-preview.component.scss']
})
export class MedicalRecordsPreviewComponent implements OnInit  {

    constructor(private dashboardService: DashboardService) {}
  records: MedicalRecord[] = [];
  date:any;

  ngOnInit(): void {
    this.records = [
      {
        id: 1,
        description: 'تشخیص: میگرن مزمن و تجویز داروی XYZ.',
        filePath: '/assets/sample-records/migraine.pdf',
        createdAt: '2025-06-30T10:00:00Z',
        doctorName: 'دکتر شفیعی'
      },
      {
        id: 2,
        description: 'بررسی دردهای عضلانی مزمن.',
        filePath: '/assets/sample-records/muscle.pdf',
        createdAt: '2025-06-20T15:45:00Z',
        doctorName: 'دکتر کیانی'
      }
    ];
  }

  openFile(path: string) {
    window.open(path, '_blank');
  }

}
