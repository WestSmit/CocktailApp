import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Params, ParamMap } from '@angular/router';
import {Drink} from '../models/drink';
import {DetailDrink} from '../models/detailDrink';
import {Category} from '../models/category';

export interface DrinkResult {
  drinks: Drink[];
}
export interface CategoryResult {
  drinks: Category[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public async getDrinks(params: ParamMap) {
    let drinks: Drink[] = [];
    let filters: string[];

    if (params.getAll("c").length == 0) {
      filters = (await this.getCategories()).drinks.map(x => x.strCategory);      
    } else {
      filters = params.getAll("c");      
    }

    for (let i = 0; i < filters.length; i++) {
      let httpParams = new HttpParams().set("c", filters[i]);
      let result = await this.http.get<DrinkResult>(`${environment.apiUrl}filter.php`, { params: httpParams }).toPromise();
      drinks = drinks.concat(result.drinks);
    }

    return drinks;
  }

  public async getCategories() {
    return await this.http.get<CategoryResult>(`${environment.apiUrl}list.php?c=list`, {}).toPromise();
  }
  public async getDetailInfo(id:number) {
    return await this.http.get<{drinks: DetailDrink}>(`${environment.apiUrl}lookup.php?i=${id}`, {}).toPromise();
  }

}