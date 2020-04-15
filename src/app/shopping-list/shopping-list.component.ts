import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]=[
    new Ingredient('Apples',5),
    new Ingredient('guavava',25)
  ]
  constructor() { }

  ngOnInit(): void {
  }

  aferAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
