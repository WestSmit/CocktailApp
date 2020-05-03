import { Component, OnInit, Input } from '@angular/core';
import { Drink } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss'],
})
export class CocktailComponent implements OnInit {
  @Input() drink: Drink;

  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {  }

  toDetails(){
    let id = this.drink.idDrink;
    this.router.navigate(['details'], {
      queryParams: { id }
    })
  }

}
