import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-dolphin-dog',
  templateUrl: './dolphin-dog.component.html',
  styleUrls: ['./dolphin-dog.component.css'],
  standalone: true,
  imports: [NgOptimizedImage],
})
export class DolphinDogComponent {}
