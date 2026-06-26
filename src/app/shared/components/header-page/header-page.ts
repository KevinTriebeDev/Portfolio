import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header-page',
  imports: [TranslatePipe],
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

  scrollToLetsWork(): void {
    document.getElementById('lets-work')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
