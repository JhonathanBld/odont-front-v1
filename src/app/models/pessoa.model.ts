import {FormBuilder, Validators} from "@angular/forms";

export class Pessoa {

  id: number;
  nome: string;
  cpf: string;
  rg: string;
  email: string;
  celular: number;
  ativo: boolean;
  isPaciente: boolean;
  isFuncionario: boolean;

  initForm() {
    return new FormBuilder().group({
      id: [''],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      email: ['', Validators.required],
      celular: [0, Validators.required],
      ativo: [false, Validators.required],
    });
  }
}
