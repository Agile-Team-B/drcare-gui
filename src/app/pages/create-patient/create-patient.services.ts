import { Injectable } from '@angular/core';

import { ApiCallService } from '../../services/api-call.service';
import { ICreatePatient } from './create-patient.model';

@Injectable()
export class CreatePatientService {
  constructor(private apiCall: ApiCallService) {}

  public createPatient: ICreatePatient = body => {
    return this.apiCall.post('user/create', body);
  }
}
