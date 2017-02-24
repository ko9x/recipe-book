import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListRouting } from  './shopping-list.routing';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent
    ],
    imports: [
    FormsModule,
    SharedModule, 
    ShoppingListRouting
    ],
    providers: [
     ]
})
export class ShoppingListModule { }