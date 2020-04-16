import { Ingredient } from "../shared/ingredient.model"
import { EventEmitter, Injectable } from '@angular/core';


export class ShoppingListService{
    ingredientChanged=new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('guavava',25)
      ]

    getIngredient(){
        return this.ingredients.slice();
    }
    
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredientFromRecipe(ingredient:Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}