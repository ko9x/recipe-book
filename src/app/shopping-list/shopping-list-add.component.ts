import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient';

import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnChanges {
  isAdd = true;
  @Input() item: Ingredient
  @Output() cleared = new EventEmitter()
  @Output() hello = new EventEmitter()
  



    constructor(private shoppingListService: ShoppingListService) { }

 

  ngOnChanges(changes) {
    if(changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {name: null, amount: null}
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    if(!this.isAdd) {
      console.log(this.isAdd);
      const newItem = new Ingredient(ingredient.name, ingredient.amount);
      this.shoppingListService.editItem(this.item, newItem);
      this.onClear()
    } else {
      console.log(this.isAdd);
      const addedItem = new Ingredient(ingredient.name, ingredient.amount);
      this.shoppingListService.addItem(addedItem);
    }
    
  }

  onDelete(item: Ingredient) {
    this.shoppingListService.removeItem(this.item)
    this.onClear()
  }

  onClear() {
    this.cleared.emit(null);
    this.isAdd = true;
  }

  

}
