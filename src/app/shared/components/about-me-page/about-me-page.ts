import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-page',
  imports: [TranslatePipe],
  templateUrl: './about-me-page.html',
  styleUrl: './about-me-page.scss',
})
export class AboutMePage {}
