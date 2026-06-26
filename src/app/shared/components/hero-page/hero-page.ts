import { Component, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-page',
  imports: [TranslatePipe],
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.scss',
})
export class HeroPage {
  isEnglish = signal(true);
  isMenuOpen = signal(false);

  constructor(private readonly translate: TranslateService) {
    this.isEnglish.set(this.translate.getCurrentLang() !== 'de');
  }

  toggleLanguage(): void {
    const nextLang = this.isEnglish() ? 'de' : 'en';
    this.translate.use(nextLang);
    this.isEnglish.set(nextLang === 'en');
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
