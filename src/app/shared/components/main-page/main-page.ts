import { Component } from '@angular/core';
import { HeaderPage } from '../header-page/header-page';
import { AboutMePage } from '../about-me-page/about-me-page';
import { SkillsetPage } from '../skillset-page/skillset-page';
import { LastWorkPage } from '../last-work-page/last-work-page';
import { FeaturedProjectsPage } from '../featured-projects-page/featured-projects-page';
import { ReviewsPage } from '../reviews-page/reviews-page';


@Component({
  selector: 'app-main-page',
  imports: [HeaderPage, AboutMePage, LastWorkPage, SkillsetPage, FeaturedProjectsPage, ReviewsPage],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
