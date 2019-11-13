import { Injectable } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import {
  IGetGP,
  ISearchGP,
  IUpdateGP
} from './general-practitioner.model'
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class GeneralPractitionerService {

  constructor(public apiCaller: ApiCallService) { }

  fetchAllGP: IGetGP = () => {
      return this.apiCaller.get('general-practitioner/list');
  }

  searchGP: ISearchGP = body => {
    if (isNullOrUndefined(body.username) || body.username === '') {
      return this.apiCaller.get('general-practitioner/list');
    }

    return this.apiCaller.get(`general-practitioner/search/${body.username}`);
  }

  updateGP: IUpdateGP = body => {
    return this.apiCaller.put('general-practitioner/update', body);
  }

}
