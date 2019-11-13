import { Injectable } from '@angular/core'

import { ApiCallService } from '../../services/api-call.service'
import {
  IGetPharmacists,
  ISearchPharmacists,
  IUpdatePharmacist
} from './pharmacists.model'
import { isNullOrUndefined } from 'util'

@Injectable()
export class PharmacistsService {
  constructor(private apiCall: ApiCallService) {}

  getPharmacists: IGetPharmacists = () => {
    return this.apiCall.get('pharmacist/list')
  }

  searchPharmacists: ISearchPharmacists = body => {
    if (isNullOrUndefined(body.username) || body.username === '') {
      return this.apiCall.get('pharmacist/list');
    }

    return this.apiCall.get(`pharmacist/search/${body.username}`);
  }

  updatePharmacist: IUpdatePharmacist = body => {
    return this.apiCall.put('pharmacist/update', body)
  }
}
