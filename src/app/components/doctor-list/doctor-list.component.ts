import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';



@Component({
  selector: 'doctor-list',
    standalone:true,
    imports: [CommonModule,CalendarModule,  FormsModule,InputTextModule, ButtonModule],
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  doctors:any[] = [];
     doctorId:any;
   selectedTime :string = '';
     selectedDate: Date | null = null;
   modalVisible = false;
  constructor(private doctorService: DoctorService, private router: Router) {}
   visible: boolean = false;
   user:any;

    showDialog() {
        this.visible = true;
    }

ngOnInit() {
 this.doctorService.getAllDoctors().subscribe(
      data => {
        this.doctors = data.$values;
          console.log("  this.doctors",   this.doctors);
      }
    );
//         this.doctorId = +this.activatedRoute.snapshot.paramMap.get('id')!;
//         this.doctorService.getDoctorById(this.doctorId).subscribe((doc)=> {
//       this.doctor = doc;
//     }
//  );



}
doctor:any;
bookAppointment(doctorId: number) {
  // به صفحه نوبت‌دهی برو یا مودال باز کن
 // this.router.navigate(['/appointments/book', doctorId]);
        this.doctorService.getDoctorById(doctorId).subscribe((doc)=> {
      this.doctor = doc;
       console.log("رزرو برای دکتر با شناسه:", this.doctor);
    });
 this.doctorId = doctorId;

    // اینجا سرویس رزرو رو می‌تونی صدا بزنی یا آماده‌سازی انجام بدی
    console.log("رزرو برای دکتر با شناسه:", doctorId);

    this.modalVisible = true;

}
 closeModal() {
    this.modalVisible = false;
    this.doctorId = null;
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

     onSubmit(form: any) {
        if (form.valid) {
           // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm()
        }
    }


}
