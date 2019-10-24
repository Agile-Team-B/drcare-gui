import { Injectable } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralPractitionerService {

  constructor(public apiCaller: ApiCallService) { }


  fetchAllGP() {
      return this.apiCaller.get('general-practitioner/fetch-all');
  }
}
