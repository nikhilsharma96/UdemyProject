import { Recipe } from './recipe.model';    
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list-service';

@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
    private recipes:Recipe[]=[
        new Recipe('A Test Recipe','This is simply a test','ninnn',[
            new Ingredient('veg',15),new Ingredient('fruits',25)
        ])
      ]; 
    constructor(private shoppingListService:ShoppingListService){}
    getRecipes(){
        return this.recipes.slice() ;
    }

    addIngredientToShoppingList(ingredient:Ingredient[]){
        this.shoppingListService.addIngredientFromRecipe(ingredient);
    }
}