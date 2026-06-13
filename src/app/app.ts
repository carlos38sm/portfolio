import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from './components/header/header';
import { CookieConsentComponent } from './components/cookie-consent/cookie-consent';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Header, CookieConsentComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}