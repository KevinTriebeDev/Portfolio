import { Routes } from '@angular/router';
import { MainPage } from './shared/components/main-page/main-page';
import { HeaderPage } from './shared/components/header-page/header-page';
import { AboutMePage } from './shared/components/about-me-page/about-me-page';
import { LastWorkPage } from './shared/components/last-work-page/last-work-page';
import { ReviewsPage } from './shared/components/reviews-page/reviews-page';
import { FeaturedProjectsPage } from './shared/components/featured-projects-page/featured-projects-page';
import { SkillsetPage } from './shared/components/skillset-page/skillset-page';
import { ImprintPage } from './shared/components/imprint-page/imprint-page';
import { PrivacyPolicyPage } from './shared/components/privacy-policy-page/privacy-policy-page';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: MainPage},
    {path: 'home', component: MainPage},
    {path: 'header', component: HeaderPage},
    {path: 'about-me', component: AboutMePage},
    {path: 'skillset', component: SkillsetPage},
    {path: 'featured-projects', component: FeaturedProjectsPage},
    {path: 'reviews', component: ReviewsPage},
    {path: 'last-work', component: LastWorkPage},
    {path: 'imprint', component: ImprintPage},
    {path: 'privacy-policy', component: PrivacyPolicyPage},
];
