import { Ingredient } from "../shared/ingredient.model"
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService{
    ingredientChanged=new Subject<Ingredient[]>();
    ingredients: Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('guavava',25)
      ]

    getIngredient(){
        return this.ingredients.slice();
    }
    
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredientFromRecipe(ingredient:Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}