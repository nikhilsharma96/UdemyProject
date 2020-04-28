import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[];
  private idChangedSub:Subscription
  constructor(private shoppingservice:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.shoppingservice.getIngredient();
    this.idChangedSub=this.shoppingservice.ingredientChanged.subscribe(
      (ingredient:Ingredient[])=>{
        this.ingredients=ingredient;
      }
    );
  }

  ngOnDestroy(){
    this.idChangedSub.unsubscribe();
  }

}
