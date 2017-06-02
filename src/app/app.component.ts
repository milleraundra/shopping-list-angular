import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Boolean = false;
  shoppingList: Boolean = true;

  onShowRecipes() {
    console.log('showRecipes FROM APP');
  }

  onShowShoppingList() {
    console.log('showShoppingLIst FROM APP');
  }
}
