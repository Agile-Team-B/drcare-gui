import { Injectable } from '@angular/core'

import { ApiCallService } from '../../services/api-call.service'
import { IGetPharmacists } from './pharmacists.model'

@Injectable()
export class PharmacistsService {
  constructor(private apiCall: ApiCallService) {}

  getPharmacists: IGetPharmacists = () => {
    return this.apiCall.get('pharmacist/list')
  }
}
