import { Injectable } from '@angular/core'
import { JwtHelperService } from '@auth0/angular-jwt'

import { ApiCallService } from './api-call.service'
// import { ILogin, LOGIN_QUERY } from '../pages/login/login.model'
// import {
//   IResetPassword,
//   RESET_PASSWORD_QUERY
// } from '../pages/reset-password/reset-password.model'

@Injectable()
export class AuthService {
  private jwtHelperService = new JwtHelperService()

  constructor(private apiCall: ApiCallService) {}

  public isAuthenticated = (): boolean => {
    return localStorage.getItem('currentUser') ? true : false
  }

  public getCurrentUser = (): { [key: string]: any } | null =>
    this.isAuthenticated()
      ? JSON.parse(localStorage.getItem('currentUser'))
      : null

  public isFirstLogin = (): boolean | null =>
    this.getCurrentUser() ? this.getCurrentUser().firstLogin : null

  public getCurrentUserToken = (): string | null =>
    this.getCurrentUser() ? this.getCurrentUser().token : null

  public decodeToken = (): { [key: string]: any } | null =>
    this.getCurrentUserToken()
      ? this.jwtHelperService.decodeToken(this.getCurrentUserToken())
      : null

  public getAuthUser = (): { [key: string]: any } | null =>
    this.decodeToken() ? this.getCurrentUser().user : null

  // public resetPassword: IResetPassword = body => {
  //   return this.apiCall
  //     .post(RESET_PASSWORD_QUERY, body)
  //     .map(res => res.resetPassword)
  // }

  // public login: ILogin = body => {
  //   return this.apiCall.post(LOGIN_QUERY, body).map(res => res.login)
  // }

  public logout = (): void => {
    window.location.reload()
    localStorage.clear()
    sessionStorage.clear()
  }
}
