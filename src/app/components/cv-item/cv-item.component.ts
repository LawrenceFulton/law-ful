import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-item',
  standalone: true,
  imports: [],
  templateUrl: './cv-item.component.html',
  styleUrl: './cv-item.component.css',
})
export class CvItemComponent {
  @Input() type!: string;
  @Input() info!: string;
}