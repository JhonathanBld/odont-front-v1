import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { routes } from '../../../../consts';
import {AuthService} from "../../../../services/auth.service";
import {User} from "../../../../models/user.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  public todayDate: Date = new Date();
  public routers: typeof routes = routes;
  public user = new User();

  constructor(
    private service: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  public sendLoginForm(e): void {
    this.user = e.user;
    this.router.navigate(['/dashboard']).then();
    this.service.signIn(this.user).subscribe(res => {
      this.snackBar.open('Login efetuado com sucesso!', 'X', {
        duration: 3000
      });
      this.service.setUser(res);
      this.router.navigate(['/dashboard']).then();
    } , (error => {
      this.snackBar.open('Nome de usuário ou senha inválidos.', 'X', {
        duration: 3000
      });
      console.log(error)
    }));
  }

  public sendSignForm(): void {
    // this.service.sign();

    this.router.navigate([this.routers.DASHBOARD]).then();
  }
}
