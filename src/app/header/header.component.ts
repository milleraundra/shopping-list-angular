import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipesView = new EventEmitter<any>();
  @Output() shoppingListView = new EventEmitter<any>();

  constructor() {
    //TODO call $(".dropdown-button").dropdown(); to activate navbar dropdown
    //TODO also return here (http://materializecss.com/navbar.html#!) to learn how to implement the hamburger menu for mobile
  }

  ngOnInit() {  }

  showRecipes() {
    console.log('showRecipes');
    this.recipesView.emit(true);
  }
  showShoppingList() {
    console.log('showShoppingList');
    this.shoppingListView.emit(true);
  }

}
