import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarCadastrarConsultaComponent } from './editar-cadastrar-consulta/editar-cadastrar-consulta.component';
import { PesquisaConsultaComponent } from './pesquisa-consulta/pesquisa-consulta.component';

@NgModule({
  declarations: [EditarCadastrarConsultaComponent, PesquisaConsultaComponent],
  imports: [
    CommonModule
  ]
})
export class ConsultaModule { }
