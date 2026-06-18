import { Component } from '@angular/core';

@Component({
  selector: 'app-header-page',
  imports: [],
  templateUrl: './header-page.html',
  styleUrl: './header-page.scss',
})
export class HeaderPage {
  scrollToFeaturedProjects(): void {
    document.getElementById('featured-projects')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
