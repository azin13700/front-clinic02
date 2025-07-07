import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserInfoCardComponent } from './components/user-info-card/user-info-card.component';
import { UncomingAppointmentsComponent } from './components/uncoming-appointments/uncoming-appointments.component';
import { MedicalRecordsPreviewComponent } from './components/medical-records-preview/medical-records-preview.component';
import { MessagesPreviewComponent } from './components/messages-preview/messages-preview.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserInfoCardComponent,
    UncomingAppointmentsComponent,
    MedicalRecordsPreviewComponent,
    MessagesPreviewComponent,
    QuickActionsComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class SharedModule { }
