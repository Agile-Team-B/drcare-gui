import { Injectable } from '@angular/core'

import { ApiCallService } from '../../services/api-call.service'
import { ICreatePharmacist } from './create-pharmacist.model'

@Injectable()
export class CreatePharmacistService {
  constructor(private apiCall: ApiCallService) {}

  public createPharmacist: ICreatePharmacist = body => {
    return this.apiCall.post('pharmacist/create', body)
  }
}
