import {FormBuilder, Validators} from "@angular/forms";

export class Tratamento {

  id: number;
  nome: string;
  periodo: string;

  initForm() {
    return new FormBuilder().group({
      id: [''],
      nome: ['', Validators.required],
      periodo: ['', Validators.required],
    });
  }
}
