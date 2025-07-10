import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'login',
  //       loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  //     },
  //     {
  //       path: '',
  //       redirectTo: 'login',
  //       pathMatch: 'full'
  //     }
  //   ]
  // }

    { path: '', component: LayoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
   { path: 'doctors', component: DoctorListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
