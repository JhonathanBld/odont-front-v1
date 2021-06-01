import {Component, OnInit} from '@angular/core';
import {Masks} from "../../../../util/masks";
import {FormGroup} from "@angular/forms";
import {Pessoa} from "../../../../models/pessoa.model";
import {PessoasService} from "../../../../services/pessoas.service";
import * as moment from "moment";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar-cadastrar-pessoa',
  templateUrl: './editar-cadastrar-pessoa.component.html',
  styleUrls: ['./editar-cadastrar-pessoa.component.css']
})
export class EditarCadastrarPessoaComponent implements OnInit {
  public masks = new Masks();
  public pessoa = new Pessoa();
  public form: FormGroup;
  public novaPessoa = false;
  public jaSalvo = false;

  constructor(private pessoaService: PessoasService, private snackBar: MatSnackBar, private router: Router, private activeRoute: ActivatedRoute) {
    this.form = this.pessoa.initForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.novaPessoa = params.id === 'new';
      if (!this.novaPessoa) {
        this.getById(params.id);
      } else {
        this.jaSalvo = true;
      }
    });
  }

  getById(id) {
    this.pessoaService.getById(id).subscribe((res: Pessoa) => {
      this.pessoa = res;
    });
  }

  onSubmit() {
    if (this.novaPessoa) {

        this.pessoaService.save(this.pessoa).subscribe(res => {
        this.snackBar.open('Pessoa cadastrada com sucesso!', 'X', {
          duration: 3000
        });
        this.jaSalvo = true;
        // this.router.navigate(['/pessoas']);
      }, error => {
        this.snackBar.open('Erro durante o processamento!', 'X', {
          duration: 3000
        });
      });
    } else {
      this.pessoaService.update(this.pessoa).subscribe(res => {
        this.snackBar.open('Pessoa alterada com sucesso!', 'X', {
          duration: 3000
        });
        this.router.navigate(['/pessoas']);
      }, error => {
        this.snackBar.open('Erro durante o processamento!', 'X', {
          duration: 3000
        });
      });
    }
  }

}
