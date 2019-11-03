import { Observable } from 'rxjs/Observable';

interface ICreatePatientReturn {}

interface ICreatePatientBody {
  name: string;
  username: string;
  password: string;
  email: string;
  isAdmin: boolean;
  userType: string;
}

export interface ICreatePatient {
  (body: ICreatePatientBody): Observable<ICreatePatientReturn>;
}
