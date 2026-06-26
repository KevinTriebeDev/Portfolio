import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-page',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer-page.html',
  styleUrl: './footer-page.scss',
})
export class FooterPage {}
