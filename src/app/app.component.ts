import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { MatSidenavModule } from "@angular/material/sidenav";

import { MatGridListModule } from "@angular/material/grid-list";

import { MatButtonModule } from "@angular/material/button";

import { MatCardModule } from "@angular/material/card";

import { MatIconModule } from "@angular/material/icon";

import { MatExpansionModule } from "@angular/material/expansion";

import { MatListModule } from "@angular/material/list";

import { MatTableModule } from "@angular/material/table";

import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatGridListModule,

    MatButtonModule,

    MatIconModule,
    MatExpansionModule,
    MatListModule,

    MatTableModule,
    MatSnackBarModule,
    HeaderComponent,
  ],
  template: `
    <app-header></app-header>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = "store";
}
