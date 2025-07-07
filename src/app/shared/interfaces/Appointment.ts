 export   interface Appointment {
  id: number;
  doctorName: string;

  appointmentDate: string;  // بهتره ISO string باشه
  time: string;
  status: 'رزرو شده' | 'لغو شده';
   appointmentTime: string;
}
