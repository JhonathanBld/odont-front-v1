import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../../../../models/pessoa.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import Swal from "sweetalert2";
import {ClinicaService} from "../../../../services/clinica.service";

@Component({
  selector: 'app-consulta-clinica',
  templateUrl: './consulta-clinica.component.html',
  styleUrls: ['./consulta-clinica.component.css']
})
export class ConsultaClinicaComponent implements OnInit {

  data : Array<Pessoa>;
  constructor(private clinicaService: ClinicaService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.clinicaService.get().subscribe(res => {
      this.data = res;
    } , error => {

    });
  }

  delete(id) {
    console.log(id);
    Swal.fire({
      title: 'Deseja deletar o registro?',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      buttonsStyling: false
    }).then((result) => {
      if (result.value) {
        this.clinicaService.delete(id).subscribe(res => {
          this.get();
          this.snackBar.open('Registro deletado com sucesso!', 'X', {
            duration: 3000
          });
        });
      }
    });
  }

}
