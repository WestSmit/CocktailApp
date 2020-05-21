import { Component } from '@angular/core';
import { DataService} from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Drink } from '../models/drink';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  drinks = new Array<Drink>();
  constructor(private data: DataService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.queryParamMap.subscribe(params => {
      this.data.getDrinks(params).then(data=> this.drinks = data);
    });        
  }

  refresh(ev) {
    this.ngOnInit(); 
    ev.detail.complete();    
  }

  toFilters(){
    let selected;
    this.activateRoute.queryParamMap.subscribe(params => selected = params.getAll("c"))
    this.router.navigate(['filter'], {
      queryParams:  {selected}
    });
  }


}
