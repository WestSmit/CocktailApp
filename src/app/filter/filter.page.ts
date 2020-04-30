import { Component, OnInit } from '@angular/core';
import { DataService, Category } from '../services/data.service';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

export class CheckboxItem {
  value: string;
  checked: boolean;
 
  constructor(value: any, checked?: boolean) {
   this.value = value;
   this.checked = checked ? checked : false;
  }
 }

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  categories = new Array<Category>();
  checkboxItems = new Array<CheckboxItem>();

  constructor(private data:DataService, private router: Router, private activateRoute: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.data.getCategories().then(data=> { this.categories = data.drinks; 
      let selected: string[];
      this.activateRoute.queryParamMap.subscribe(params => selected = params.getAll("selected"))      
      this.categories.map(x => this.checkboxItems.push(new CheckboxItem(x.strCategory, selected.includes(x.strCategory))))
    });     
  }

  applyFilter() {    
    let c = this.checkboxItems.filter(x => x.checked).map(x => x.value);
    this.router.navigate(['home'], {
      queryParams: { c } 
    });
  }
  
  toHome(){
    let c: string[];
    this.activateRoute.queryParamMap.subscribe(params => c = params.getAll("selected")) 
    this.router.navigate(['home'], {
      queryParams: { c }
    })
  }

}
