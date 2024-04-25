import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatMenuModule } from "@angular/material/menu";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatMenuModule, MatBadgeModule, CommonModule, RouterModule],
  templateUrl: "./header.component.html",
})
export class HeaderComponent {}
