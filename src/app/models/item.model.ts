import {FormBuilder, Validators} from "@angular/forms";

export class Item {

  id: number;
  nome: string;
  valor: number;
  saldo: number;
  ativo: boolean;

  initForm() {
    return new FormBuilder().group({
      id: [''],
      nome: ['', Validators.required],
      valor: ['', Validators.required],
      saldo: [0, Validators.required],
      ativo: [false, Validators.required]
    });
  }
}
