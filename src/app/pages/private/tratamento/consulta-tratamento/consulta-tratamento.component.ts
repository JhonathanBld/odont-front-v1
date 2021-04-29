import { Component, OnInit } from '@angular/core';
import {PessoasService} from "../../../../services/pessoas.service";
import Swal from "sweetalert2";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TratamentoService} from "../../../../services/tratamentos.service";
import {Tratamento} from "../../../../models/tratamentos.model";

@Component({
  selector: 'app-consulta-tratamento',
  templateUrl: './consulta-tratamento.component.html',
  styleUrls: ['./consulta-tratamento.component.css']
})
export class TratamentoComponent implements OnInit {
  data : Array<Tratamento>;
  constructor(private tratamentosService: TratamentoService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.tratamentosService.get().subscribe(res => {
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
        this.tratamentosService.delete(id).subscribe(res => {
          this.snackBar.open('Registro deletado com sucesso!', 'X', {
            duration: 3000
          });
        });
      }
    });
  }

}
