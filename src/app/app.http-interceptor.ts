import {Injectable} from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from "@angular/common/http";
import 'rxjs/add/operator/do';
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");
    if (token) {
      const secureReq = req.clone({
        headers: new HttpHeaders({
          "Authorization": `Bearer ${token}`
        })
      });
      return next.handle(secureReq).do((event: any) => {
      }, error => {
        if (error.error.error == 'access_denied') {
          this.snackBar.open('Acesso negado para a operação!', 'X', {
            duration: 3000
          });
        }
        this.router.navigate(['/dashboard']);
      });
    }
    return next.handle(req);
  }
}
