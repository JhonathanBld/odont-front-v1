import {FormBuilder, Validators} from "@angular/forms";
import { Pessoa } from './pessoa.model';

export class Funcionario {

  id: number;
  ortodentista: boolean;
  atende: boolean;
  pessoa: Pessoa;

  initForm() {
    return new FormBuilder().group({
      id: [''],
      ortodentista: [false, Validators.required],
      atende: [false, Validators.required],
      pessoa: ['', Validators.required],
    });
  }
}
