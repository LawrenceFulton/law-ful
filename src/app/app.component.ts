import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MatIcon, MatButton, RouterLink, RouterOutlet, HeaderComponent],
})
export class AppComponent {
  title = 'law-ful';
}
