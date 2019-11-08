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
