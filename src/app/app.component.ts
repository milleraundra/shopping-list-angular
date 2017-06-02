import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Boolean = true;
  shoppingList: Boolean = false;

  onShowRecipes(data) {
    this.recipes = true;
    this.shoppingList = false;
  }

  onShowShoppingList(data) {
    this.shoppingList = true;
    this.recipes = false;
  }
}
