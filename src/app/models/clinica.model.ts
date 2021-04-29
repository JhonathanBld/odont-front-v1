import {FormBuilder, Validators} from "@angular/forms";

export class Clinica {

  id: number;
  nome: string;
  endereco: string;

  initForm() {
    return new FormBuilder().group({
      id: [''],
      nome: ['', Validators.required],
      endereco: ['', Validators.required]
    });
  }
}
