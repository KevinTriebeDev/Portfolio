import { Component } from '@angular/core';

@Component({
  selector: 'app-last-work-page',
  imports: [],
  templateUrl: './last-work-page.html',
  styleUrl: './last-work-page.scss',
})
export class LastWorkPage {
  name = '';
  email = '';
  helpMessage = '';
  privacyAccepted = false;
  submitted = false;
  checkboxHovered = false;

  get nameError(): string {
    return this.submitted && !this.name.trim() ? 'Please enter your name.' : '';
  }

  get emailError(): string {
    return this.submitted && !this.email.trim() ? 'Please enter your email.' : '';
  }

  get helpError(): string {
    return this.submitted && !this.helpMessage.trim() ? 'Please tell me how I can help.' : '';
  }

  get privacyError(): string {
    return this.submitted && !this.privacyAccepted ? 'Please accept the privacy policy.' : '';
  }

  get namePlaceholder(): string {
    return this.nameError || 'Your name goes here';
  }

  get emailPlaceholder(): string {
    return this.emailError || 'youremail@email.com';
  }

  get helpPlaceholder(): string {
    return this.helpError || 'Hello, I am interested in...';
  }

  get checkboxIcon(): string {
    return this.privacyAccepted 
      ? '/assets/img/check_box.png'
      : '/assets/img/check_box_outline_blank.png';
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted = true;
  }

  togglePrivacy(): void {
    this.privacyAccepted = !this.privacyAccepted;
  }

  setCheckboxHover(hovered: boolean): void {
    this.checkboxHovered = hovered;
  }
}
