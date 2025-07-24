import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { AnalyticsComponent } from './features/dashboard/analytics/analytics.component';
import { MessagesComponent } from './features/dashboard/messages/messages.component';
import { ProjectsComponent } from './features/dashboard/projects/projects.component';
import { SettingsComponent } from './features/dashboard/settings/settings.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
        { path: 'analytics', component: AnalyticsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'settings', component: SettingsComponent },
      {
       path: 'dashboard',
       loadChildren: () =>
       import('src/app/features/dashboard/dashboard.routes'),
       },
     //  { path: 'dashboard', component: DashboardComponent },
        {  path: 'doctor-list',
           loadChildren: () =>
           import('src/app/components/doctor-list/Doctor-list.routes'),
            },
     {  path: 'messages',
           loadChildren: () =>
           import('src/app/shared/components/messages-preview/messages-preview.routes'),
            },

     // { path: 'dashboard', component: DashboardComponent },
    //  { path: 'dashboard/doctors', component: DoctorListComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
