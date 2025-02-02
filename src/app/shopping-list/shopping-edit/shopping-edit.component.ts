import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list-service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:false}) nameInput:ElementRef;
  @ViewChild('amountInput',{static:false}) amountInput:ElementRef;
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName= this.nameInput.nativeElement.value;
    const ingamount= this.amountInput.nativeElement.value;
    const ing= new Ingredient(ingName,ingamount);
    this.shoppingService.addIngredient(ing);
  }
}
