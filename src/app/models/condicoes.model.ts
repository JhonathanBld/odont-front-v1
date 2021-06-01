import {FormBuilder, Validators} from "@angular/forms";

export class Condicao {

  id: number;
  nome: string;
  detalhes: string;
  ativo: boolean;

  initForm() {
    return new FormBuilder().group({
      id: [''],
      nome: ['', Validators.required],
      detalhes: ['', Validators.required],
      ativo: [false]
    });
  }
}
