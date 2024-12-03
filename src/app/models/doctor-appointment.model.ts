import { AppointmentDoctor } from './appointments-doctor.model';

export interface DoctorAppointment {
  id: string;
  name: string;
  specialty: string;
  CRM: string;
  address: string;
  hospital: string;
  modalty: string;
  photoUrl: string;
  appointments: AppointmentDoctor[];
}
