import { Component, OnInit } from '@angular/core';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { Recipe } from './recipe';
import { ShoppingListAddComponent } from '../shopping-list/shopping-list-add.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  

}
