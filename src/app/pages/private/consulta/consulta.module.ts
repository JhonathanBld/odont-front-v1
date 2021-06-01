import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarCadastrarConsultaComponent } from './editar-cadastrar-consulta/editar-cadastrar-consulta.component';
import { PesquisaConsultaComponent } from './pesquisa-consulta/pesquisa-consulta.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';
import {SharedModule} from '../../../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [EditarCadastrarConsultaComponent, PesquisaConsultaComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    MatButtonModule,
    FlexModule,
    SharedModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    CurrencyMaskModule,
    MatCheckboxModule,
  ]
})
export class ConsultaModule { }
