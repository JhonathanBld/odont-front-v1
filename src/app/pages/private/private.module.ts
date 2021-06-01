import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrivateRoutingModule} from "./private-routing.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {SharedModule} from "../../shared/shared.module";
import {PessoaModule} from "./pessoa/pessoa.module";
import {CondicaoModule} from "./condicao/condicao.module";
import {ItemModule} from "./item/item.module";
import { ProcedimentoModule } from './procedimento/procedimento.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    DashboardModule,
    SharedModule,
    PessoaModule,
    CondicaoModule,
    ItemModule,
    ProcedimentoModule

  ]
})
export class PrivateModule {}
