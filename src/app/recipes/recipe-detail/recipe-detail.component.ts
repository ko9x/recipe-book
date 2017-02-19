import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

import { Recipe } from '../recipe';

import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private recipeIndex: number

  private confirmed: boolean = null

  private selectedRecipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
    ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex)
      }
    )
  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }
  onDelete(recipe: Recipe) {
    this.selectedRecipe = recipe
    this.confirmed = confirm(`
      Are you sure you want to delete this recipe? 
      This change cannot be undone.
    `);
    this.onDeleteConfirmed(this.selectedRecipe, this.confirmed)
  }

  onDeleteConfirmed(recipe: Recipe, confirmed: boolean) {
    if(confirmed) {
      this.recipeService.deleteRecipe(recipe);
    }
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
