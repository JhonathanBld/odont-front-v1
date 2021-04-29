import { Component, OnInit } from '@angular/core';
import {Masks} from "../../../../util/masks";
import {FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import * as moment from "moment";
import {ClinicaService} from "../../../../services/clinica.service";
import {Clinica} from "../../../../models/clinica.model";

@Component({
  selector: 'app-editar-cadastrar-clinica',
  templateUrl: './editar-cadastrar-clinica.component.html',
  styleUrls: ['./editar-cadastrar-clinica.component.css']
})
export class EditarCadastrarClinicaComponent implements OnInit {

  public masks = new Masks();
  public clinica = new Clinica();
  public form: FormGroup;
  public novaClinica = false;

  constructor(private clinicaService: ClinicaService, private snackBar: MatSnackBar, private router: Router, private activeRoute: ActivatedRoute) {
    this.form = this.clinica.initForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.novaClinica = params.id === 'new';
      if (!this.novaClinica) {
        this.getById(params.id);
      }
    });
  }

  getById(id) {
    this.clinicaService.getById(id).subscribe((res: Clinica) => {
      this.clinica = res;
    });
  }

  onSubmit() {
    if (this.novaClinica) {
      this.clinicaService.save(this.clinica).subscribe(res => {
        this.snackBar.open('Clinica cadastrada com sucesso!', 'X', {
          duration: 3000
        });
        this.router.navigate(['/clinicas']);
      }, error => {
        this.snackBar.open('Erro durante o processamento!', 'X', {
          duration: 3000
        });
      });
    } else {
      this.clinicaService.update(this.clinica).subscribe(res => {
        this.snackBar.open('Clinica alterada com sucesso!', 'X', {
          duration: 3000
        });
        this.router.navigate(['/clinicas']);
      }, error => {
        this.snackBar.open('Erro durante o processamento!', 'X', {
          duration: 3000
        });
      });
    }
  }

}
