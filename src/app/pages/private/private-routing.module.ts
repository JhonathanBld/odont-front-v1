import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardPageComponent} from "./dashboard/containers";
import {PrivateModule} from "./private.module";
import {AuthGuard} from "../auth/guards";
import {EditarCadastrarPessoaComponent} from "./pessoa/editar-cadastrar-pessoa/editar-cadastrar-pessoa.component";
import {ConsultaPessoaComponent} from "./pessoa/consulta-pessoa/consulta-pessoa.component";
import {PrivateInterceptor} from "./private-interceptor";
import {TratamentoComponent} from "./tratamento/consulta-tratamento/consulta-tratamento.component";
import {EditarCadastrarTratamentoComponent} from "./tratamento/editar-cadastrar-tratamento/editar-cadastrar-tratamento.component";
import {ConsultaClinicaComponent} from "./clinica/consulta-clinica/consulta-clinica.component";
import {EditarCadastrarClinicaComponent} from "./clinica/editar-cadastrar-clinica/editar-cadastrar-clinica.component";

const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: DashboardPageComponent
  }, {
    path: 'pessoas',
    canActivate: [AuthGuard],
    component: ConsultaPessoaComponent
  }, {
    path: 'pessoa/:id',
    canActivate: [AuthGuard],
    component: EditarCadastrarPessoaComponent
  },{
    path: 'tratamentos',
    canActivate: [AuthGuard],
    component: TratamentoComponent
  },{
    path: 'tratamento/:id',
    canActivate: [AuthGuard],
    component: EditarCadastrarTratamentoComponent
  },{
    path: 'clinicas',
    canActivate: [AuthGuard],
    component: ConsultaClinicaComponent
  },{
    path: 'clinica/:id',
    canActivate: [AuthGuard],
    component: EditarCadastrarClinicaComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports : [
    RouterModule
  ],providers : [PrivateInterceptor]
})
export class PrivateRoutingModule { }
