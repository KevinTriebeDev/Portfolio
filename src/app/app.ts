import { Component, HostListener, signal } from '@angular/core';
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
  protected readonly cursorX = signal(0);
  protected readonly cursorY = signal(0);

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.cursorX.set(event.clientX);
    this.cursorY.set(event.clientY);
  }
}
