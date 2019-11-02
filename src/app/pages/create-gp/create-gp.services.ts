import { Injectable } from '@angular/core';

import { ApiCallService } from '../../services/api-call.service';
import { ICreateGP } from './create-gp.model';

@Injectable()
export class CreateGPService {
  constructor(private apiCall: ApiCallService) {}

  public createGP: ICreateGP = body => {
    return this.apiCall.post('gp/create', body);
  }
}
