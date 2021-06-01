import {FormBuilder, Validators} from "@angular/forms";

export class Paciente {

  id: number;
  tipoSanguineo: string;

  initForm() {
    return new FormBuilder().group({
      id: [''],
      tipoSanguineo: ['', Validators.required],
    });
  }
}
