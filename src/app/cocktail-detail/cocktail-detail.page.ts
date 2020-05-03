import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailDrink, DataService } from '../services/data.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.page.html',
  styleUrls: ['./cocktail-detail.page.scss'],
})
export class CocktailDetailPage implements OnInit {

  details = new DetailDrink();

  constructor( private activatedRoute: ActivatedRoute, private data:DataService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => this.data.getDetailInfo(params['id'])
      .then(data => {this.details = data.drinks[0]; console.log(this.details)}));
  }

}
