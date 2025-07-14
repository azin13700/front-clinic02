import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'doctor-list',
    standalone:true,
    imports: [CommonModule,DialogModule,ButtonModule],
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  doctors:any[] = [];
     doctorId:any;
   selectedDate:string ='';
   selectedTime :string = '';
  constructor(private doctorService: DoctorService, private router: Router) {}
   visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

ngOnInit() {
 this.doctorService.getAllDoctors().subscribe(
      data => {
        this.doctors = data.$values;
      }
    );
//         this.doctorId = +this.activatedRoute.snapshot.paramMap.get('id')!;
//         this.doctorService.getDoctorById(this.doctorId).subscribe((doc)=> {
//       this.doctor = doc;
//     }
//  );



}

bookAppointment(doctorId: number) {
  // به صفحه نوبت‌دهی برو یا مودال باز کن
  this.router.navigate(['/appointments/book', doctorId]);


}


    book() {
    if (!this.selectedDate || !this.selectedTime) return;

    const appointmentTime = new Date(`${this.selectedDate}T${this.selectedTime}`);

    this.doctorService.bookAppointment({
      doctorId: this.doctorId,
      appointmentTime,
      userId: 1, // فعلاً دستی، بعداً از توکن بگیر
    }).subscribe({
      next: () => {
        alert("رزرو با موفقیت انجام شد.");
        this.router.navigate(['/appointments']);
      },
      error: err => console.error(err)
    });
  }



}
