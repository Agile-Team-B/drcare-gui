import { Observable } from 'rxjs/Observable';

interface ICreateGPReturn {}

interface ICreateGPBody {
  name: string;
  username: string;
  password: string;
  email: string;
  isAdmin: boolean;
  userType: string;
}

export interface ICreateGP {
  (body: ICreateGPBody): Observable<ICreateGPReturn>;
}
