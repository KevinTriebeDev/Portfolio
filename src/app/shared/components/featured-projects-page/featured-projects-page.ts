import { DOCUMENT } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';

type ProjectTech = {
  name: string;
  icon: string;
};

type ProjectItem = {
  title: string;
  href: string;
  technologies: string[];
  image: string;
  alt: string;
  dialogImage: string;
  number: string;
  headline: string;
  description: string;
  stack: ProjectTech[];
  githubUrl: string;
  liveUrl: string;
};

@Component({
  selector: 'app-featured-projects-page',
  imports: [],
  templateUrl: './featured-projects-page.html',
  styleUrl: './featured-projects-page.scss',
})
export class FeaturedProjectsPage implements OnDestroy {
  private readonly doc = inject(DOCUMENT);
  private previousBodyOverflow = '';

  readonly projects: ProjectItem[] = [
    {
      title: 'Join',
      href: '#',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      image: '/assets/img/01.png',
      alt: 'Preview of the Join project',
      dialogImage: '/assets/img/join_vorschau.png',
      number: '01',
      headline: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      stack: [
        { name: 'CSS', icon: '/assets/img/CSS_dialog.png' },
        { name: 'HTML', icon: '/assets/img/html_dialog.png' },
        { name: 'Firebase', icon: '/assets/img/Firebase_dialog.png' },
        { name: 'Angular', icon: '/assets/img/agular_dialog.png' },
        { name: 'TypeScript', icon: '/assets/img/typescript_dialog.png' },
      ],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'El Pollo Loco',
      href: '#',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/assets/img/02.png',
      alt: 'Preview of the El Pollo Loco project',
      dialogImage: '/assets/img/elpolloloco_vorschau.png',
      number: '02',
      headline: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      stack: [
        { name: 'JavaScript', icon: '/assets/img/js_dialog.png' },
        { name: 'HTML', icon: '/assets/img/html_dialog.png' },
        { name: 'CSS', icon: '/assets/img/CSS_dialog.png' },
      ],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'DA Bubble',
      href: '#',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      image: '/assets/img/03.png',
      alt: 'Preview of the DA Bubble project',
      dialogImage: '/assets/img/dabubble_vorschau.png',
      number: '03',
      headline: 'DABubble',
      description: 'This App is Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      stack: [
        { name: 'JavaScript', icon: '/assets/img/js_dialog.png' },
        { name: 'HTML', icon: '/assets/img/html_dialog.png' },
        { name: 'CSS', icon: '/assets/img/CSS_dialog.png' },
      ],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  hoveredProjectIndex: number | null = null;
  activeDialogIndex: number | null = null;

  setHoveredProject(index: number): void {
    this.hoveredProjectIndex = index;
  }

  clearHoveredProject(): void {
    this.hoveredProjectIndex = null;
  }

  openProjectDialog(index: number, event: Event): void {
    event.preventDefault();

    if (this.activeDialogIndex === null) {
      this.lockBodyScroll();
    }

    this.activeDialogIndex = index;
  }

  closeProjectDialog(): void {
    this.activeDialogIndex = null;
    this.unlockBodyScroll();
  }

  onDialogBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeProjectDialog();
    }
  }

  openNextProject(): void {
    if (this.activeDialogIndex === null) {
      return;
    }

    this.activeDialogIndex = (this.activeDialogIndex + 1) % this.projects.length;
  }

  ngOnDestroy(): void {
    this.unlockBodyScroll();
  }

  private lockBodyScroll(): void {
    const body = this.doc?.body;
    if (!body) {
      return;
    }

    this.previousBodyOverflow = body.style.overflow;
    body.style.overflow = 'hidden';
  }

  private unlockBodyScroll(): void {
    const body = this.doc?.body;
    if (!body) {
      return;
    }

    body.style.overflow = this.previousBodyOverflow;
  }
}
