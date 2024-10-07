import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

export interface PersonalInfo {
  type: string;
  info: string;
}

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  imports: [NgForOf],
  standalone: true,
})
export class CvComponent {
  personalInfo: PersonalInfo[] = [
    { type: 'Name', info: 'Lawrence Fulton' },
    { type: 'Alter', info: '24' },
    { type: 'Wohnort', info: 'Aachen' },
    { type: 'Studium', info: 'Computational Social Science' },
    { type: 'Hobbies', info: 'Badminton, Elektronische Musik, Programmieren' },
  ];
}
