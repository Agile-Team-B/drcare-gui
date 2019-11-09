import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCallService } from 'src/app/services/api-call.service';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private apiCaller: ApiCallService) { }

  fetchAllUsers(): Observable<any> {
      return this.apiCaller.get('user/list');
  }
}
