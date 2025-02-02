import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode=false;
  constructor(private acRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.acRoute.params.subscribe(
     (param:Params)=>{
      this.id=+param['id'];
      this.editMode=param['id']!=null;
     } 
    )
  }

}
