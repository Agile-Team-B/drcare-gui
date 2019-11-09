import { Observable } from 'rxjs/Observable'

interface ICreatePharmacistReturn {}

interface ICreatePharmacistBody {
  name: string
  username: string
  password: string
  email: string
  isAdmin: boolean
  userType: string
}

export interface ICreatePharmacist {
  (body: ICreatePharmacistBody): Observable<ICreatePharmacistReturn>
}
