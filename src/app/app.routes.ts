import { Routes } from '@angular/router';
import { FindADoctorComponent } from './pages/find-a-doctor/find-a-doctor.component';
import { MyAppointmentsComponent } from './pages/my-appointments/my-appointments.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'find-a-doctor',
    component: FindADoctorComponent,
  },
  {
    path: 'my-appointments',
    component: MyAppointmentsComponent,
  },
];
