import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaClinicaComponent } from './consulta-clinica/consulta-clinica.component';
import { EditarCadastrarClinicaComponent } from './editar-cadastrar-clinica/editar-cadastrar-clinica.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import {SharedModule} from "../../../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";



@NgModule({
  declarations: [ConsultaClinicaComponent, EditarCadastrarClinicaComponent],
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
    MatDatepickerModule

  ]
})
export class ClinicaModule { }
