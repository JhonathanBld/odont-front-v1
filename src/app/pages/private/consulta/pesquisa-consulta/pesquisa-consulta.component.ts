import { Component, OnInit } from '@angular/core';
import {Pessoa} from '../../../../models/pessoa.model';
import {ItemService} from '../../../../services/item.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pesquisa-consulta',
  templateUrl: './pesquisa-consulta.component.html',
  styleUrls: ['./pesquisa-consulta.component.css']
})
export class PesquisaConsultaComponent implements OnInit {

  data : Array<Pessoa>;
  constructor(private itemService: ItemService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // this.get();
  }

  get() {
    this.itemService.get().subscribe(res => {
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
        this.itemService.delete(id).subscribe(res => {
          this.get();
          this.snackBar.open('Registro deletado com sucesso!', 'X', {
            duration: 3000
          });
        });
      }
    });
  }

}
