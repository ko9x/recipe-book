import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class ShoppingListService {

  private items: Ingredient[] = [
  ];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItem(item: Ingredient) {
    this.items.push(item);
  }


  editItem(oldItem: Ingredient, newItem: Ingredient) {
    this.items[this.items.indexOf(oldItem)] = newItem;
  }
  
  removeItem(item: Ingredient) {
    const itemIndex = this.items.indexOf(item);
    this.items.splice(itemIndex, 1);
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }
}
