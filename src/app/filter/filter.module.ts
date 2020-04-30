import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPage } from '../filter/filter.page';
import { IonicModule } from '@ionic/angular';
import { FilterRoutingModule } from '../filter/filter-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FilterPage],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    FilterRoutingModule
  ]
})
export class FilterModule { }
