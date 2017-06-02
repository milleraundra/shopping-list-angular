import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() viewRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Spring Rolls', 'Delicious recipe from spring rolls', 'https://s-media-cache-ak0.pinimg.com/736x/18/6e/6a/186e6aaacc35a81699b538868d8b925b.jpg'),
    new Recipe('California Roll', 'Simple and scrumptious', 'https://www.sushihaven.co.uk/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/c/a/california_roll.jpg')
  ];

  onViewRecipe(recipe) {
    this.viewRecipe.emit(recipe);
  }

  constructor() { }


  ngOnInit() {
  }

}
