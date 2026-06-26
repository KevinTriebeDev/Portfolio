import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

type Testimonial = {
  quoteKey: string;
  author: string;
  roleKey: string;
};

@Component({
  selector: 'app-reviews-page',
  imports: [TranslatePipe],
  templateUrl: './reviews-page.html',
  styleUrl: './reviews-page.scss',
})
export class ReviewsPage {
  readonly arrowDefault = '/assets/img/24. Arrow - references.png';
  readonly arrowHover = '/assets/img/arrows.png';

  readonly testimonials: Testimonial[] = [
    {
      quoteKey: 'REVIEWS.ITEM_1.QUOTE',
      author: 'A. Fischer',
      roleKey: 'REVIEWS.ITEM_1.ROLE',
    },
    {
      quoteKey: 'REVIEWS.ITEM_2.QUOTE',
      author: 'T. Schulz',
      roleKey: 'REVIEWS.ITEM_2.ROLE',
    },
    {
      quoteKey: 'REVIEWS.ITEM_3.QUOTE',
      author: 'M. Wagner',
      roleKey: 'REVIEWS.ITEM_3.ROLE',
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
