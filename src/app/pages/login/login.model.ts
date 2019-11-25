import { Observable } from 'rxjs/Observable'

interface IUser {
  id: string
  emailAddress: string
  firstName: string
  lastName: string
}

interface ILoginReturn {
  token: string
  user: IUser
}

interface ILoginBody {
  email: string
  password: string
}

export interface ILogin {
  (body: ILoginBody): Observable<ILoginReturn>
}
