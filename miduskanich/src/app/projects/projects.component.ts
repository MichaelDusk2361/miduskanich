import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mid-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(private router: Router) {}
  projects: { title: string; image: string; url:string; description: string }[] = [
    {
      title: 'Social Impulse Analysis Application',
      image: 'assets/a-sia.png',
      url: 'a-sia',
      description:
        'This project is part of the three semester innovation lab at the FH Technikum Wien. Therefore, I am currently team-lead of a five person group, aiming to develop a full stack application used for graph-based social impulse analysis.',
    },
    {
      title: 'IoT Aquarium',
      image: 'assets/aquarium_60l.jpg',
      url: 'iot-aquarium',
      description:
        'As part of the 5th semester course "Scientific Writing and Research Methods" we need to write a paper about a chosen topic. I decided to make an IoT aquarium, that logs data, controls components and warns in case of any unusual parameters.',
    },
    
  ];

  navigateToProjectArticle(url:string):void {
    this.router.navigateByUrl(`projects/${url}`);
  }
}
