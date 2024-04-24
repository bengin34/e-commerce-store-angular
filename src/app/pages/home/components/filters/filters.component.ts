import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectionList } from '@angular/material/list';
import { MatListOption } from '@angular/material/list';


@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatExpansionModule,CommonModule,MatSelectionList,MatListOption],
  templateUrl: './filters.component.html'
})
export class FiltersComponent {
@Output() categorySelected = new EventEmitter<string>()



categories = ['shoes','sports','clothes','electronics','home','toys','food','books','beauty','tools','furniture','other']



onShowCategory(category:string):void{
  this.categorySelected.emit(category)
}

}
