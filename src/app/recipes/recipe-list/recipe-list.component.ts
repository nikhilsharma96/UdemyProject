import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes:Recipe[];
  index:number;
  constructor(private recipeService:RecipeService,
    private router: Router,
    private acRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.acRoute});
  }

}
