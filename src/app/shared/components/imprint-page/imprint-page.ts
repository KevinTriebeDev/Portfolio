import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint-page',
  imports: [TranslatePipe],
  templateUrl: './imprint-page.html',
  styleUrl: './imprint-page.scss',
})
export class ImprintPage {}
