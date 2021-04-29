import {FormBuilder, Validators} from "@angular/forms";

export class Pessoa {

  id: number;
  nome: string;
  documento: string;
  nascimento: string;

  initForm() {
    return new FormBuilder().group({
      id: [''],
      nome: ['', Validators.required],
      documento: ['', Validators.required],
      nascimento: ['', Validators.required]
    });
  }
}
