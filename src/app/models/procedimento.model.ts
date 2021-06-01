import {FormBuilder, Validators} from "@angular/forms";

export class Procedimento {

  id: number;
  nome: string;
  detalhe: string;
  ativo: boolean;

  initForm() {
    return new FormBuilder().group({
      id: [''],
      nome: ['', Validators.required],
      detalhe: ['', Validators.required],
      ativo: [false]
    });
  }
}
