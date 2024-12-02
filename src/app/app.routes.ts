import { Routes } from '@angular/router';
import { FindADoctorComponent } from './pages/find-a-doctor/find-a-doctor.component';
import { MyAppointmentsComponent } from './pages/my-appointments/my-appointments.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: WelcomeComponent },
  {
    path: 'schedule',
    children: [
      {
        path: '',
        component: ScheduleComponent,
      },
      { path: ':specialty', component: FindADoctorComponent },
    ],
  },

  { path: 'my-appointments', component: MyAppointmentsComponent },
];
