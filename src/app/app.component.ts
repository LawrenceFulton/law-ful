import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'law-ful';


  constructor(private activatedRoute: ActivatedRoute) {}

  // get the current route without the root path

}
