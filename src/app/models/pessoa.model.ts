import {FormBuilder, Validators} from "@angular/forms";

export class Pessoa {

  id: number;
  nome: string;
  documento: string;
  nascimento: string;
  rg: string;
  email: string;
  celular: string;
  ativo: boolean;

  initForm() {
    return new FormBuilder().group({
      id: [''],
      nome: ['', Validators.required],
      documento: ['', Validators.required],
      nascimento: ['', Validators.required],
      rg: ['', Validators.required],
      email: ['', Validators.required],
      celular: ['', Validators.required],
      ativo: [false, Validators.required],
    });
  }
}
