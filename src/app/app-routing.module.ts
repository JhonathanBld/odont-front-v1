import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {LayoutComponent} from "./shared/layout/layout.component";
import {AuthGuard} from "./pages/auth/guards";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {LoginFormComponent} from "./pages/auth/components";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./pages/private/private.module').then(m => m.PrivateModule),
    canActivate: []
  },{
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
