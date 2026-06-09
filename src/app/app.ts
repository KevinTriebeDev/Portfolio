import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPage } from './shared/components/main-page/main-page';
import { HeaderPage } from "./shared/components/header-page/header-page";
import { HeroPage } from "./shared/components/hero-page/hero-page";
import { AboutMePage } from "./shared/components/about-me-page/about-me-page";
import { SkillsetPage } from "./shared/components/skillset-page/skillset-page";
import { FeaturedProjectsPage } from "./shared/components/featured-projects-page/featured-projects-page";
import { ReviewsPage } from "./shared/components/reviews-page/reviews-page";
import { LastWorkPage } from "./shared/components/last-work-page/last-work-page";
import { FooterPage } from "./shared/components/footer-page/footer-page";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainPage, HeaderPage, HeroPage, AboutMePage, SkillsetPage, FeaturedProjectsPage, ReviewsPage, LastWorkPage, FooterPage],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('Portfolio');
}
