import { Component, OnInit, Input } from '@angular/core';
import { Drink } from '../models/drink';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss'],
})
export class CocktailComponent implements OnInit {
  @Input() drink: Drink;

  constructor(private router:Router) { }

  ngOnInit() {  }

  toDetails(){
    let id = this.drink.idDrink;
    this.router.navigate(['details'], {
      queryParams: { id }
    })
  }

}
