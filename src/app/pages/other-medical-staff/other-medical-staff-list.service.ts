import { Injectable } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';
import { Observable } from 'rxjs';
import { IUser } from '../users/user.model';

@Injectable({
  providedIn: 'root'
})
export class OtherMedicalStaffListService {

  user: IUser;
  constructor(private apiCaller: ApiCallService) { }

  fetchAllUsers(): Observable<any> {
      return this.apiCaller.get('other/list');
  }

  fetchOtherMedicalStaff(userArg: IUser): Observable<IUser> {
      return this.apiCaller.get(`other/search/${userArg.name}`);
  }

  fetchAllOtherMedicalStaff(): Observable<IUser[]> {
    return this.apiCaller.get('other/list');
  }
}
