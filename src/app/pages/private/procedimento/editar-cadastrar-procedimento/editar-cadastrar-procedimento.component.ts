import {Component, OnInit} from '@angular/core';
import {Masks} from "../../../../util/masks";
import {FormGroup} from "@angular/forms";
import * as moment from "moment";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {Procedimento} from "../../../../models/procedimento.model";
import { ProcedimentoService } from '../../../../services/procedimento.service';

@Component({
  selector: 'app-editar-cadastrar-procedimento',
  templateUrl: './editar-cadastrar-procedimento.component.html',
  styleUrls: ['./editar-cadastrar-procedimento.component.css']
})
export class EditarCadastrarProcedimentoComponent implements OnInit {
  public masks = new Masks();
  public procedimento = new Procedimento();
  public form: FormGroup;
  public novaProcedimento = false;

  constructor(private procedimentoService: ProcedimentoService, private snackBar: MatSnackBar, private router: Router, private activeRoute: ActivatedRoute) {
    this.form = this.procedimento.initForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.novaProcedimento = params.id === 'new';
      if (!this.novaProcedimento) {
        this.getById(params.id);
      }
    });
  }


  getById(id) {
    this.procedimentoService.getById(id).subscribe((res: Procedimento) => {
      this.procedimento = res;
    });
  }

  onSubmit() {
    if (this.novaProcedimento) {
      this.procedimentoService.save(this.procedimento).subscribe(res => {
        this.snackBar.open('Procedimento cadastrado com sucesso!', 'X', {
          duration: 3000
        });
        this.router.navigate(['/procedimentos']);
      }, error => {
        this.snackBar.open('Erro durante o processamento!', 'X', {
          duration: 3000
        });
      });
    } else {
      this.procedimentoService.update(this.procedimento).subscribe(res => {
        this.snackBar.open('Procedimento alterado com sucesso!', 'X', {
          duration: 3000
        });
        this.router.navigate(['/procedimentos']);
      }, error => {
        this.snackBar.open('Erro durante o processamento!', 'X', {
          duration: 3000
        });
      });
    }
  }

}
