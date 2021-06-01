import {Component, OnInit} from '@angular/core';
import {Masks} from "../../../../util/masks";
import {FormGroup} from "@angular/forms";
import * as moment from "moment";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {Condicao} from "../../../../models/condicoes.model";
import { CondicaoService } from '../../../../services/condicoes.service';

@Component({
  selector: 'app-editar-cadastrar-condicao',
  templateUrl: './editar-cadastrar-condicao.component.html',
  styleUrls: ['./editar-cadastrar-condicao.component.css']
})
export class EditarCadastrarCondicaoComponent implements OnInit {
  public masks = new Masks();
  public condicao = new Condicao();
  public form: FormGroup;
  public novaCondicao = false;

  constructor(private condicaoService: CondicaoService, private snackBar: MatSnackBar, private router: Router, private activeRoute: ActivatedRoute) {
    this.form = this.condicao.initForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.novaCondicao = params.id === 'new';
      if (!this.novaCondicao) {
        this.getById(params.id);
      }
    });
  }


  getById(id) {
    this.condicaoService.getById(id).subscribe((res: Condicao) => {
      this.condicao = res;
    });
  }

  onSubmit() {
    if (this.novaCondicao) {
      this.condicaoService.save(this.condicao).subscribe(res => {
        this.snackBar.open('Condicao cadastrado com sucesso!', 'X', {
          duration: 3000
        });
        this.router.navigate(['/condicoes']);
      }, error => {
        this.snackBar.open('Erro durante o processamento!', 'X', {
          duration: 3000
        });
      });
    } else {
      this.condicaoService.update(this.condicao).subscribe(res => {
        this.snackBar.open('Condicao alterado com sucesso!', 'X', {
          duration: 3000
        });
        this.router.navigate(['/condicoes']);
      }, error => {
        this.snackBar.open('Erro durante o processamento!', 'X', {
          duration: 3000
        });
      });
    }
  }

}
