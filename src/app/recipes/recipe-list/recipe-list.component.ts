import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() viewRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[];

  onViewRecipe(recipe) {
    this.RecipeService.viewRecipe(recipe);
  }

  constructor(private RecipeService: RecipeService) { }


  ngOnInit() {
    this.recipes = this.RecipeService.getRecipes();
  }

}
