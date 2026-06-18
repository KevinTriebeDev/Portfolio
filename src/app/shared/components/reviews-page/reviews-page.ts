import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews-page',
  imports: [],
  templateUrl: './reviews-page.html',
  styleUrl: './reviews-page.scss',
})
export class ReviewsPage {
  readonly arrowDefault = '/assets/img/24. Arrow - references.png';
  readonly arrowHover = '/assets/img/arrows.png';

  readonly testimonials = [
    {
      quote: 'Simon worked with Lukas in a group project and highlighted his focused, proactive style and strong execution.',
      author: 'A. Fischer',
      role: 'Team Partner',
    },
    {
      quote: 'Our project benefited enormously from Simon efficient way of working.',
      author: 'T. Schulz',
      role: 'Frontend Developer',
    },
    {
      quote: 'Lukas has proven to be a reliable teammate with solid technical skills and a proactive approach to project success.',
      author: 'M. Wagner',
      role: 'Project Lead',
    },
  ];

  readonly displayTestimonials = [
    this.testimonials[this.testimonials.length - 1],
    ...this.testimonials,
    this.testimonials[0],
  ];

  activeIndex = 1;
  visualIndex = this.activeIndex + 1;
  isTransitionEnabled = true;
  prevHovered = false;
  nextHovered = false;

  get trackTransform(): string {
    return `translateX(calc((var(--card-width) + var(--card-gap)) * -${this.visualIndex}))`;
  }

  prev(): void {
    this.visualIndex -= 1;
    this.activeIndex =
      (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  next(): void {
    this.visualIndex += 1;
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  goTo(index: number): void {
    this.activeIndex = index;
    this.visualIndex = index + 1;
  }

  onTrackTransitionEnd(): void {
    const lastCloneIndex = this.testimonials.length + 1;

    if (this.visualIndex === 0) {
      this.isTransitionEnabled = false;
      this.visualIndex = this.testimonials.length;

      requestAnimationFrame(() => {
        this.isTransitionEnabled = true;
      });
      return;
    }

    if (this.visualIndex === lastCloneIndex) {
      this.isTransitionEnabled = false;
      this.visualIndex = 1;

      requestAnimationFrame(() => {
        this.isTransitionEnabled = true;
      });
    }
  }
}
