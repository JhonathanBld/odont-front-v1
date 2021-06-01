import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {MatSnackBar} from "@angular/material/snack-bar"
import { ProcedimentoService } from '../../../../services/procedimento.service';
import { Procedimento } from '../../../../models/procedimento.model';

@Component({
  selector: 'app-consulta-procedimento',
  templateUrl: './consulta-procedimento.component.html',
  styleUrls: ['./consulta-procedimento.component.css']
})
export class ProcedimentoComponent implements OnInit {
  data : Array<Procedimento>;
  constructor(private procedimentoService: ProcedimentoService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.procedimentoService.get().subscribe(res => {
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
        this.procedimentoService.delete(id).subscribe(res => {
          this.get();
          this.snackBar.open('Registro deletado com sucesso!', 'X', {
            duration: 3000
          });
        });
      }
    });
  }

}
