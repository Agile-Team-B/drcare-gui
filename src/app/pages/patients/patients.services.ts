import { Injectable } from '@angular/core'

import { ApiCallService } from '../../services/api-call.service'
import { IGetPatients, ISearchPatients } from './patients.model'

@Injectable()
export class PatientsService {
  constructor(private apiCall: ApiCallService) {}

  getPatients: IGetPatients = () => {
    return this.apiCall.get('patient/list')
  }

  searchPatients: ISearchPatients = body => {
    return this.apiCall.get(`patient/search/${body.username}`)
  }
}
