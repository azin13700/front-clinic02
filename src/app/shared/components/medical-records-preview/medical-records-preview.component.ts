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
 this.dashboardService.getLatestRecords().subscribe(data => {
    this.records = data;

 });
  }

  openFile(path: string) {
    window.open(path, '_blank');
  }

}
