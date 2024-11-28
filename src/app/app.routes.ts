import { Routes } from '@angular/router';
import { FindADoctorComponent } from './pages/find-a-doctor/find-a-doctor.component';
import { MyAppointmentsComponent } from './pages/my-appointments/my-appointments.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'find-a-doctor',
    component: FindADoctorComponent,
  },
   {
        path: 'my-appointments',
        component: MyAppointmentsComponent
    }
];
