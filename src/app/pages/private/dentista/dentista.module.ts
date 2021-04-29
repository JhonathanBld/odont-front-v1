import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaDentistaComponent } from './consulta-dentista/consulta-dentista.component';
import { EditarCadastrarDentistaComponent } from './editar-cadastrar-dentista/editar-cadastrar-dentista.component';



@NgModule({
  declarations: [ConsultaDentistaComponent, EditarCadastrarDentistaComponent],
  imports: [
    CommonModule
  ]
})
export class DentistaModule { }
