import {Injectable} from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Injectable()
export class PrivateInterceptor implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem("token");
    if (!token) {
      this.router.navigate(["/dashboard"]).then();
    } else {
      this.router.navigate(["/login"]).then();
      return false;
    }
  }
}
