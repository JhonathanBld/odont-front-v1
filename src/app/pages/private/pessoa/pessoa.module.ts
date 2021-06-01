import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaPessoaComponent } from './consulta-pessoa/consulta-pessoa.component';
import { EditarCadastrarPessoaComponent } from './editar-cadastrar-pessoa/editar-cadastrar-pessoa.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [ConsultaPessoaComponent, EditarCadastrarPessoaComponent],
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
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatTabsModule,
  ],
  providers : [
    MatDatepickerModule,
    MatSnackBar
  ]
})
export class PessoaModule { }
