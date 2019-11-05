import { Observable } from 'rxjs/Observable'

interface IPharmacist {
  id: number
  email: string
  name: string
  username: string
}

interface IGetPharmacistsBody {
  username?: string
}

export interface IGetPharmacists {
  (body: IGetPharmacistsBody): Observable<IPharmacist[]>
}
