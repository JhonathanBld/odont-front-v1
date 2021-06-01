import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// @ts-ignore
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthPageComponent } from './containers';
import { AuthRoutingModule } from './auth-routing.module';
import { YearPipe } from './pipes';
import { LoginFormComponent, SignFormComponent } from './components';
import { AuthGuard } from './guards';
import { AuthService } from '../../services/auth.service';
import { ExtendedModule, FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AuthPageComponent,
    YearPipe,
    LoginFormComponent,
    SignFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    FlexModule,
    ExtendedModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AuthModule { }
