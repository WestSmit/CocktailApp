import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailComponent } from './cocktail.component';

@NgModule({
  declarations: [ CocktailComponent ],
  imports: [
    CommonModule
  ],
  exports: [ CocktailComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CocktailModule { }
