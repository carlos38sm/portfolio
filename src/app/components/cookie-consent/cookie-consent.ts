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
      this.loadGA4();
    }
  }

  accept() {
    localStorage.setItem('cookieConsent', 'accepted');
    this.showBanner = false;
    this.loadGA4();
  }

  decline() {
    localStorage.setItem('cookieConsent', 'declined');
    this.showBanner = false;
  }

  private loadGA4() {
    // Inyectamos el script de Google con tu ID real
    const script1 = document.createElement('script');
    script1.src = `https://www.googletagmanager.com/gtag/js?id=G-R8DYD36GGS`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-R8DYD36GGS');
    `;
    document.head.appendChild(script2);
  }
}