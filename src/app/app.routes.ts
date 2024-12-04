import { Routes } from '@angular/router';
import { FindADoctorComponent } from './pages/find-a-doctor/find-a-doctor.component';
import { MyAppointmentsComponent } from './pages/my-appointments/my-appointments.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { doctorRegisterComponent } from './pages/doctor-register/doctor-register.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: WelcomeComponent, canActivate: [authGuard] },
  {
    path: 'schedule',
    children: [
      {
        path: '',
        component: ScheduleComponent,
      },
      { path: ':specialty/:date', component: FindADoctorComponent },
      { path: ':specialty/:date/:id', component: FindADoctorComponent },
    ],
  },
  {
    path: 'doctorRegister',
    component: doctorRegisterComponent,
    canActivate: [authGuard],
  },

  {
    path: 'my-appointments',
    component: MyAppointmentsComponent,
    canActivate: [authGuard],
  },
];
