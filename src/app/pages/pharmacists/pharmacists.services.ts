import { Injectable } from '@angular/core'

import { ApiCallService } from '../../services/api-call.service'
import { IGetPharmacists, ISearchPharmacists } from './pharmacists.model'

@Injectable()
export class PharmacistsService {
  constructor(private apiCall: ApiCallService) {}

  getPharmacists: IGetPharmacists = () => {
    return this.apiCall.get('pharmacist/list')
  }

  searchPharmacists: ISearchPharmacists = body => {
    return this.apiCall.get(`pharmacist/search/${body.username}`)
  }
}
