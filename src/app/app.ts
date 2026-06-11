import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroPage } from './shared/components/hero-page/hero-page';
import { FooterPage } from './shared/components/footer-page/footer-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroPage, FooterPage],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('Portfolio');
}
