import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Condicao} from "../../../../models/condicoes.model";
import { CondicaoService } from '../../../../services/condicoes.service';

@Component({
  selector: 'app-consulta-condicao',
  templateUrl: './consulta-condicao.component.html',
  styleUrls: ['./consulta-condicao.component.css']
})
export class CondicaoComponent implements OnInit {
  data : Array<Condicao>;
  constructor(private condicoesService: CondicaoService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.condicoesService.get().subscribe(res => {
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
        this.condicoesService.delete(id).subscribe(res => {
          this.get();
          this.snackBar.open('Registro deletado com sucesso!', 'X', {
            duration: 3000
          });
        });
      }
    });
  }

}
