import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<Ingredient>();

  newIngredient(name: string, amount: number) {
    this.addIngredient.emit(new Ingredient(name, amount));
  }

  constructor() { }

  ngOnInit() {
  }

}
