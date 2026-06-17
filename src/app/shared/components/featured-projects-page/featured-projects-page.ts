import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-projects-page',
  imports: [],
  templateUrl: './featured-projects-page.html',
  styleUrl: './featured-projects-page.scss',
})
export class FeaturedProjectsPage {
  readonly projects = [
    {
      title: 'Join',
      href: '#',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      image: '/assets/img/01.png',
      alt: 'Preview of the Join project',
    },
    {
      title: 'El Pollo Loco',
      href: '#',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/assets/img/02.png',
      alt: 'Preview of the El Pollo Loco project',
    },
    {
      title: 'DA Bubble',
      href: '#',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      image: '/assets/img/03.png',
      alt: 'Preview of the DA Bubble project',
    },
  ];

  hoveredProjectIndex: number | null = null;

  setHoveredProject(index: number): void {
    this.hoveredProjectIndex = index;
  }

  clearHoveredProject(): void {
    this.hoveredProjectIndex = null;
  }
}
