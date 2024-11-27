import { Routes } from '@angular/router';
import { FindADoctorComponent } from './pages/find-a-doctor/find-a-doctor.component';
import { MyAppointmentsComponent } from './pages/my-appointments/my-appointments.component';

export const routes: Routes = [
    {
        path: 'find-a-doctor',
        component: FindADoctorComponent
    },
    {
        path: 'my-appointments',
        component: MyAppointmentsComponent
    }

];
