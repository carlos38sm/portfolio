import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-consent.html',
  styleUrls: ['./cookie-consent.scss']
})
export class CookieConsentComponent implements OnInit {
  showBanner: boolean = false;

  ngOnInit() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      this.showBanner = true;
    } else if (consent === 'accepted') {
      this.grantConsent();
    }
  }

  accept() {
    localStorage.setItem('cookieConsent', 'accepted');
    this.showBanner = false;
    this.grantConsent();
  }

  decline() {
    localStorage.setItem('cookieConsent', 'declined');
    this.showBanner = false;
  }

  private grantConsent() {
    const navWindow = window as any;
    if (navWindow.gtag) {
      navWindow.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
      console.log('¡Candado abierto! Datos enviados.');
    }
  }
}