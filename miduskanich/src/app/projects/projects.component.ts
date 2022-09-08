import { Component } from '@angular/core';

@Component({
  selector: 'mid-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: { title: string; image: string; description: string }[] = [
    {
      title: 'Social Impulse Analysis Application',
      image: 'assets/a-sia.png',
      description:
        'This project is part of the three semester innovation lab at the FH Technikum Wien. Therefore, I am currently team-lead of a five person group, aiming to develop a full stack application used for graph-based social impulse analysis.',
    },
    {
      title: 'Unity Boids Simulation',
      image: 'assets/boid.png',
      description:
        'With the primary target of learning Data oriented Design (Unity DOTS) and optimization techniques using compute shaders, I am currently developing a boid simulation in Unity. It emulates flock- / swarm-like navigation behavior and exposes many learning opportunities for algorithm optimization.',
    },
  ];
}
