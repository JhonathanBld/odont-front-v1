import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TratamentoComponent } from './consulta-tratamento/consulta-tratamento.component';
import { EditarCadastrarTratamentoComponent } from './editar-cadastrar-tratamento/editar-cadastrar-tratamento.component';
import {SharedModule} from "../../../shared/shared.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {TextMaskModule} from "angular2-text-mask";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";
import {TratamentoService} from "../../../services/tratamentos.service";



@NgModule({
  declarations: [TratamentoComponent, EditarCadastrarTratamentoComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxDatatableModule,
    FlexModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TextMaskModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers : [
    MatDatepickerModule,
    MatSnackBar,
    TratamentoService
  ]
})
export class TratamentoModule { }
