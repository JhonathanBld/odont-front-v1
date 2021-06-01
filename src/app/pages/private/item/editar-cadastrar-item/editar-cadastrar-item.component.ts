import { Component, OnInit } from '@angular/core';
import {Masks} from "../../../../util/masks";
import {FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import * as moment from "moment";
import {Item} from "../../../../models/item.model";
import { ItemService } from '../../../../services/item.service';

@Component({
  selector: 'app-editar-cadastrar-item',
  templateUrl: './editar-cadastrar-item.component.html',
  styleUrls: ['./editar-cadastrar-item.component.css']
})
export class EditarCadastrarItemComponent implements OnInit {

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
