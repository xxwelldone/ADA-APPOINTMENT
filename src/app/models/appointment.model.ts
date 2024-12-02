import { Doctor } from './doctor.model';
import { Status } from './ENUM/status.enum';
import { userAppointment } from './user-appointment.model';

export interface Appointment {
  id: string;
  date: string;
  time: string;
  status: Status;
  userId: string;
  doctorId: string;
  user: userAppointment;
  doctor: Doctor;
}
