import {Component, OnInit} from '@angular/core';
import {Masks} from '../../../../util/masks';
import {Item} from '../../../../models/item.model';
import {FormGroup} from '@angular/forms';
import {ItemService} from '../../../../services/item.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-editar-cadastrar-consulta',
  templateUrl: './editar-cadastrar-consulta.component.html',
  styleUrls: ['./editar-cadastrar-consulta.component.css']
})
export class EditarCadastrarConsultaComponent implements OnInit {

  public masks = new Masks();
  public item = new Item();
  public form: FormGroup;
  public novaItem = false;

  constructor(private itemService: ItemService, private snackBar: MatSnackBar, private router: Router, private activeRoute: ActivatedRoute) {
    this.form = this.item.initForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.novaItem = params.id === 'new';
      if (!this.novaItem) {
        this.getById(params.id);
      }
    });
  }

  getById(id) {
    this.itemService.getById(id).subscribe((res: Item) => {
      this.item = res;
    });
  }

  onSubmit() {
    if (this.novaItem) {
      this.itemService.save(this.item).subscribe(res => {
        this.snackBar.open('Item cadastrada com sucesso!', 'X', {
          duration: 3000
        });
        this.router.navigate(['/itens']);
      }, error => {
        this.snackBar.open('Erro durante o processamento!', 'X', {
          duration: 3000
        });
      });
    } else {
      this.itemService.update(this.item).subscribe(res => {
        this.snackBar.open('Item alterada com sucesso!', 'X', {
          duration: 3000
        });
        this.router.navigate(['/itens']);
      }, error => {
        this.snackBar.open('Erro durante o processamento!', 'X', {
          duration: 3000
        });
      });
    }
  }

}
