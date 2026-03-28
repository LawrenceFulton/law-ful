import { Component } from '@angular/core';

export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  type: string;
  period: string;
  location?: string;
  description: string[];
  skills?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  skills?: string;
}

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  name = 'Lawrence Fulton';
  headline = 'Building a Brighter Tomorrow with Code and a Heart';
  location = 'Düsseldorf, Germany';

  experience: Experience[] = [
    {
      title: 'Specialist',
      company: 'PD - Berater der öffentlichen Hand GmbH',
      type: 'Full-time',
      period: 'Jan 2026 - Present',
      location: 'Düsseldorf, North Rhine-Westphalia, Germany · Hybrid',
      description: [],
    },
    {
      title: 'Co-Founder & Software Lead',
      company: 'Background',
      companyUrl: 'https://background-app.de',
      type: 'Self-employed',
      period: 'Jul 2023 - Present',
      location: 'Aachen, North Rhine-Westphalia, Germany · Hybrid',
      description: [
        'Plattform zur Förderung konstruktiver Debatten und zur Überwindung gesellschaftlicher Polarisierung. Als einer von zwei Gründern verantworte ich die komplette technische Umsetzung sowie wesentliche geschäftliche Aufgaben.',
        'Cross-Platform App: Entwicklung und Veröffentlichung der mobilen Anwendung für iOS und Android mittels Flutter.',
        'Cloud-Architektur: Konzeption und Implementierung einer flexiblen und wartungsarmen Serverless-Infrastruktur.',
        'Unternehmensaufbau: Strategische Produktentwicklung, Übernahme administrativer Kernprozesse sowie Vorbereitung und Durchführung von Pitches.',
        'End-to-End Ownership: Ganzheitliche Verantwortung von der ersten Codezeile bis zum erfolgreichen Launch in den App Stores.',
      ],
      skills: 'Python, Angular and +5 skills',
    },
    {
      title: 'Junior Engineer',
      company: 'L21s',
      companyUrl: 'https://l21s.de',
      type: 'Work Study',
      period: 'Sep 2022 - Jun 2024',
      location: '',
      description: [
        'Mitaufbau einer neuen, datenschutzkonformen Softwareplattform für den Bereich Personenschaden, von der ersten Idee bis zum Go-Live.',
        'Tech-Stack: Fullstack-Entwicklung komplexer Web-Apps mit Kotlin, Spring Boot und Angular.',
        'Kern-Features: Umsetzung von Anwendungen für die elektronische Schweigepflichtsentbindung und medizinische Rechnungsprüfung.',
        'Integration: Anbindung externer Systeme (z. B. GDV, OCR-Texterkennung) zur Prozessautomatisierung.',
      ],
      skills: 'Python, Angular and +4 skills',
    },
  ];

  skills: string[] = [
    'Python',
    'Angular',
    'Flutter',
    'Kotlin',
    'Spring Boot',
    'TypeScript',
    'Data Science',
    'Cloud Architecture',
    'Serverless',
    'OCR',
    'Fullstack Development',
  ];

  education: Education[] = [
    {
      school: 'RWTH Aachen University',
      degree: 'Master of Science - MS, Computational Social Systems',
      period: 'Oct 2021 - Nov 2025',
      skills: 'Data Science, Python and +3 skills',
    },
    {
      school: 'University of Groningen',
      degree: 'Bachelor of Science - BS, Artificial Intelligence',
      period: 'Sep 2018 - Aug 2021',
      skills: 'Data Science, Python and +2 skills',
    },
  ];
}
