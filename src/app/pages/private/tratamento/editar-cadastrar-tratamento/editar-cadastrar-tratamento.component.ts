import {Component, OnInit} from '@angular/core';
import {Masks} from "../../../../util/masks";
import {FormGroup} from "@angular/forms";
import * as moment from "moment";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {Tratamento} from "../../../../models/tratamentos.model";
import {TratamentoService} from "../../../../services/tratamentos.service";

@Component({
  selector: 'app-editar-cadastrar-tratamento',
  templateUrl: './editar-cadastrar-tratamento.component.html',
  styleUrls: ['./editar-cadastrar-tratamento.component.css']
})
export class EditarCadastrarTratamentoComponent implements OnInit {
  public masks = new Masks();
  public tratamento = new Tratamento();
  public form: FormGroup;
  public novaTratamento = false;

  constructor(private tratamentoService: TratamentoService, private snackBar: MatSnackBar, private router: Router, private activeRoute: ActivatedRoute) {
    this.form = this.tratamento.initForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.novaTratamento = params.id === 'new';
      if (!this.novaTratamento) {
        this.getById(params.id);
      }
    });
  }

  getById(id) {
    this.tratamentoService.getById(id).subscribe((res: Tratamento) => {
      this.tratamento = res;
    });
  }

  onSubmit() {
    if (this.novaTratamento) {
      this.tratamentoService.save(this.tratamento).subscribe(res => {
        this.snackBar.open('Tratamento cadastrado com sucesso!', 'X', {
          duration: 3000
        });
        this.router.navigate(['/tratamentos']);
      }, error => {
        this.snackBar.open('Erro durante o processamento!', 'X', {
          duration: 3000
        });
      });
    } else {
      this.tratamentoService.update(this.tratamento).subscribe(res => {
        this.snackBar.open('Tratamento alterado com sucesso!', 'X', {
          duration: 3000
        });
        this.router.navigate(['/tratamentos']);
      }, error => {
        this.snackBar.open('Erro durante o processamento!', 'X', {
          duration: 3000
        });
      });
    }
  }

}
