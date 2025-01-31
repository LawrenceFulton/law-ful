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
    {
      type: 'Arbeitserfahrung',
      info: 'Softwareentwickler bei <a href="https://www.ericsson.com">Ericsson</a> (2021-)',
    },
    { type: 'Master', info: 'Computational Social Science (2021-)' },
    { type: 'Bachelor', info: 'Artificial Intelligence (2018-2021)' },
    { type: 'Hobbies', info: 'Badminton, Elektronische Musik, Programmieren' },
  ];
}
