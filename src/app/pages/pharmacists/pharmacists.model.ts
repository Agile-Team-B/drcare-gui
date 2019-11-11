import { Observable } from 'rxjs/Observable'

interface IPharmacist {
  id: number
  email: string
  name: string
  username: string
}

export interface IGetPharmacists {
  (): Observable<IPharmacist[]>
}

interface ISearchPharmacistsBody {
  username: string
}

export interface ISearchPharmacists {
  (body: ISearchPharmacistsBody): Observable<IPharmacist[]>
}

interface IUpdatePharmacistBody {
  id: number
  name: string
  username: string
  email: string
  password: string
  isAdmin: boolean
  userType: string
}

export interface IUpdatePharmacist {
  (body: IUpdatePharmacistBody): Observable<any>
}
