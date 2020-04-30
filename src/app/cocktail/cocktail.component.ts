import { Component, OnInit, Input } from '@angular/core';
import { Drink } from '../services/data.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss'],
})
export class CocktailComponent implements OnInit {
  @Input() drink: Drink;

  constructor() { }

  ngOnInit() {  }

}
