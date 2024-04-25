import { Component } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ProductsHeaderComponent } from "./components/products-header/products-header.component";
import { FiltersComponent } from "./components/filters/filters.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { ProductBoxComponent } from "./components/product-box/product-box.component";

const ROWS_HEIGHT: { [id: number]: number } = {
  1: 400,
  2: 335,
  4: 350,
};

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    MatSidenavModule,
    ProductsHeaderComponent,
    FiltersComponent,
    MatGridListModule,
    ProductBoxComponent
  ],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols]

  category: string | undefined;

  onColumnsCountChanged(colsNum: number): void {
    this.cols = colsNum;
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
