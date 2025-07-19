import { Component, OnInit } from '@angular/core';
import { MedicalRecord } from '../../interfaces/MedicalRecord';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { MedicalRecordService } from 'src/app/services/medical-record.service';
@Component({
  selector: 'app-medical-records-preview',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './medical-records-preview.component.html',
  styleUrls: ['./medical-records-preview.component.scss']
})
export class MedicalRecordsPreviewComponent implements OnInit  {


  constructor(private recordService: MedicalRecordService) {}
  records: MedicalRecord[] = [];
  date:any;

  ngOnInit(): void {

    const userId = 1; // بعداً از JWT
    this.recordService.getRecordsByUserId(userId).subscribe({
      next: (data) => this.records = data.$values,
      error: (err) => console.error(err)
    });
  }

  openFile(path: string) {
    window.open(path, '_blank');
  }

}
