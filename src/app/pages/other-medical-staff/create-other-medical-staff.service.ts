import { Injectable } from '@angular/core'
import { ApiCallService } from '../../services/api-call.service'
import { ICreateOtherMedicalStaff } from './create-other-medical-staff.model'
import { Observable } from 'rxjs'

@Injectable()
export class CreateOtherMedicalStaffService {
  constructor(private apiCall: ApiCallService) {}

  public createOtherMedicalStaff(body: ICreateOtherMedicalStaff): Observable<any>{
    return this.apiCall.post('other/create', body);
  }
}
