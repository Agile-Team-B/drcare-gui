import { Observable } from 'rxjs/Observable'

interface ICreatePharmacistReturn {}

interface ICreatePharmacistBody {
  name: string
  username: string
  password: string
  email: string
  isAdmin: boolean
}

export interface ICreatePharmacist {
  (body: ICreatePharmacistBody): Observable<ICreatePharmacistReturn>
}
