import { Component } from '@angular/core';

export interface PersonalInfo {
  type: string;
  info: string;
}

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
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
