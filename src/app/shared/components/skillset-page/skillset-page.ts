import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skillset-page',
  imports: [TranslatePipe],
  templateUrl: './skillset-page.html',
  styleUrl: './skillset-page.scss',
})
export class SkillsetPage {
  scrollToLetsWork(): void {
    document.getElementById('lets-work')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
