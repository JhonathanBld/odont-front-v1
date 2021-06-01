import { Component, OnInit } from '@angular/core';
import {PessoasService} from "../../../../services/pessoas.service";
import Swal from "sweetalert2";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Condicao} from "../../../../models/condicoes.model";
import { CondicaoService } from '../../../../services/condicoes.service';

@Component({
  selector: 'app-consulta-procedimento',
  templateUrl: './consulta-procedimento.component.html',
  styleUrls: ['./consulta-procedimento.component.css']
})
export class ProcedimentoComponent implements OnInit {
  data : Array<Condicao>;
  constructor(private procedimentoService: CondicaoService, private snackBar: MatSnackBar) { }

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
