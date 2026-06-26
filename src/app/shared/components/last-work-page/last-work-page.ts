import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-last-work-page',
  imports: [RouterLink, TranslatePipe],
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

  constructor(private readonly translate: TranslateService) {}

  get nameError(): string {
    return this.submitted && !this.name.trim() ? this.translate.instant('LAST_WORK.ERROR_NAME') : '';
  }

  get emailError(): string {
    return this.submitted && !this.email.trim() ? this.translate.instant('LAST_WORK.ERROR_EMAIL') : '';
  }

  get helpError(): string {
    return this.submitted && !this.helpMessage.trim() ? this.translate.instant('LAST_WORK.ERROR_HELP') : '';
  }

  get privacyError(): string {
    return this.submitted && !this.privacyAccepted ? this.translate.instant('LAST_WORK.ERROR_PRIVACY') : '';
  }

  get namePlaceholder(): string {
    return this.nameError || this.translate.instant('LAST_WORK.PLACEHOLDER_NAME');
  }

  get emailPlaceholder(): string {
    return this.emailError || this.translate.instant('LAST_WORK.PLACEHOLDER_EMAIL');
  }

  get helpPlaceholder(): string {
    return this.helpError || this.translate.instant('LAST_WORK.PLACEHOLDER_HELP');
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
