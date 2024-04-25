import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "../../models/cart.model";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";


@Component({
  selector: "app-cart",
  standalone: true,
  imports: [MatCardModule,CommonModule,MatButtonModule, RouterModule],
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      // {
      //   product: "https=//via.placeholder.com/150",
      //   name: "snickers",
      //   price: 150,
      //   quantity: 1,
      //   id: 1,
      // },
    ],
  };

  dataSource: Array<CartItem> = [];
  displayedColums: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
}
