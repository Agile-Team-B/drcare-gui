import { Observable } from 'rxjs/Observable';

interface IGP {
  id: number;
  email: string;
  name: string;
  username: string;
}

export type IGetGP = () => Observable<IGP[]>;

interface ISearchGPBody {
  username: string;
}

export type ISearchGP = (body: ISearchGPBody) => Observable<IGP[]>;

interface IUpdateGPBody {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  userType: string;
}

export type IUpdateGP = (body: IUpdateGPBody) => Observable<any>;
