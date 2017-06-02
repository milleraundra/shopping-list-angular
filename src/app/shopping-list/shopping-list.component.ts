import { Component, OnInit } from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Cabbage', 2),
    new Ingredient('Rice', 8)
  ];

  addIngredient(ingredient) {
    this.ingredients.unshift(ingredient);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
