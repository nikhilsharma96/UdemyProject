import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe-service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id:number;
  constructor(private recipeService:RecipeService,
    private acRoute:ActivatedRoute,
    private route:Router) { }

  ngOnInit(): void {
    this.acRoute.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.recipe=this.recipeService.getRecipe(this.id)
      }
      )
  }

  onEdit(){
    this.route.navigate(['edit'],{relativeTo:this.acRoute});
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredient);
   }

}
