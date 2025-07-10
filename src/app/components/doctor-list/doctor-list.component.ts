import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'doctor-list',
    standalone:true,
    imports: [CommonModule],
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  doctors:any[] = [];
  constructor(private doctorService: DoctorService) {}
  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(
      data => {
        this.doctors = data.$values;
      }
    )

  }

}
