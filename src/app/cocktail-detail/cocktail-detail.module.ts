import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailDetailPage } from './cocktail-detail.page'
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [ {
  path: '',
  component: CocktailDetailPage
}
];

@NgModule({
  declarations: [CocktailDetailPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class CocktailDetailModule { }
