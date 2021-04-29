import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrivateRoutingModule} from "./private-routing.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {SharedModule} from "../../shared/shared.module";
import {PessoaModule} from "./pessoa/pessoa.module";
import {TratamentoModule} from "./tratamento/tratamento.module";
import {ClinicaModule} from "./clinica/clinica.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    DashboardModule,
    SharedModule,
    PessoaModule,
    TratamentoModule,
    ClinicaModule
  ]
})
export class PrivateModule {}
