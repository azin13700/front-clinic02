import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {
                path: 'dashboard',
                loadChildren: () =>
                    import(
                        'src/app/shared/header/header.routes'
                    ),
            },
     //  { path: 'dashboard', component: DashboardComponent },
        {
                path: 'doctor-list',
                loadChildren: () =>
                    import(
                        'src/app/components/doctor-list/Doctor-list.routes'
                    ),
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
