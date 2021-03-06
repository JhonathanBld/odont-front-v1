import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPageComponent} from './dashboard/containers';
import {EditarCadastrarPessoaComponent} from './pessoa/editar-cadastrar-pessoa/editar-cadastrar-pessoa.component';
import {ConsultaPessoaComponent} from './pessoa/consulta-pessoa/consulta-pessoa.component';
import {CondicaoComponent} from './condicao/consulta-condicao/consulta-condicao.component';
import {EditarCadastrarCondicaoComponent} from './condicao/editar-cadastrar-condicao/editar-cadastrar-condicao.component';
import {ConsultaItemComponent} from './item/consulta-item/consulta-item.component';
import {EditarCadastrarItemComponent} from './item/editar-cadastrar-item/editar-cadastrar-item.component';
import {ProcedimentoComponent} from './procedimento/consulta-procedimento/consulta-procedimento.component';
import {EditarCadastrarProcedimentoComponent} from './procedimento/editar-cadastrar-procedimento/editar-cadastrar-procedimento.component';
import {EditarCadastrarConsultaComponent} from './consulta/editar-cadastrar-consulta/editar-cadastrar-consulta.component';
import {PesquisaConsultaComponent} from './consulta/pesquisa-consulta/pesquisa-consulta.component';


const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    canActivate: [],
    component: DashboardPageComponent
  }, {
    path: 'pessoas',
    canActivate: [],
    component: ConsultaPessoaComponent
  }, {
    path: 'pessoa/:id',
    canActivate: [],
    component: EditarCadastrarPessoaComponent
  }, {
    path: 'condicoes',
    canActivate: [],
    component: CondicaoComponent
  }, {
    path: 'condicao/:id',
    canActivate: [],
    component: EditarCadastrarCondicaoComponent
  }, {
    path: 'itens',
    canActivate: [],
    component: ConsultaItemComponent
  }, {
    path: 'item/:id',
    canActivate: [],
    component: EditarCadastrarItemComponent
  },
  {
    path: 'procedimentos',
    canActivate: [],
    component: ProcedimentoComponent
  },
  {
    path: 'procedimento/:id',
    canActivate: [],
    component: EditarCadastrarProcedimentoComponent
  },
  {
    path: 'consulta/:id',
    canActivate: [],
    component: EditarCadastrarConsultaComponent
  },
  {
    path: 'consulta',
    canActivate: [],
    component: PesquisaConsultaComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ], providers: []
})
export class PrivateRoutingModule {
}
