import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.scss',
})
export class HeroPage {
  isEnglish = signal(true);
  isHovered = signal(false);
  isMenuOpen = signal(false);

  get clickMeImageSrc(): string {
    const lang = this.isEnglish() ? 'english' : 'deutsch';
    const state = this.isHovered() ? '_hover' : '';
    return `/assets/img/${lang}${state}.svg`;
  }

  toggleLanguage(): void {
    this.isEnglish.update(value => !value);
  }

  onHoverStart(): void {
    this.isHovered.set(true);
  }

  onHoverEnd(): void {
    this.isHovered.set(false);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    this.closeMenu();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
