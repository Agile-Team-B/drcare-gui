import { Injectable, OnInit } from '@angular/core'
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router'
import { AuthService } from './services/auth.service'

@Injectable()
export class AuthGuard implements CanActivate, OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const {
      authService: { isAuthenticated }
    } = this

    if (isAuthenticated()) {
      return true
    } else {
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: state.url }
      })
      return false
    }
  }
}
