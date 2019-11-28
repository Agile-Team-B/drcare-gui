import { Observable } from 'rxjs/Observable'

interface IPatient {
  id: number
  email: string
  name: string
  username: string
}

export interface IGetPatients {
  (): Observable<IPatient[]>
}

interface ISearchPatientsBody {
  username: string
}

export interface ISearchPatients {
  (body: ISearchPatientsBody): Observable<IPatient[]>
}

interface IUpdatePatientBody {
  id: number
  name: string
  username: string
  email: string
  password: string
  isAdmin: boolean
  userType: string
}

export interface IUpdatePatient {
  (body: IUpdatePatientBody): Observable<any>
}

