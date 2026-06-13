import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-consent.html',
  styleUrls: ['./cookie-consent.scss']
})
export class CookieConsentComponent implements OnInit {
  showBanner: boolean = false;

  constructor(
    private renderer: Renderer2, 
    @Inject(DOCUMENT) private document: Document
  ) {}

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
    const script1 = this.renderer.createElement('script');
    this.renderer.setAttribute(script1, 'src', 'https://www.googletagmanager.com/gtag/js?id=G-0HR8V9K382');
    this.renderer.setAttribute(script1, 'async', 'true');
    this.renderer.appendChild(this.document.head, script1);

    // 2. Script de configuración
    const script2 = this.renderer.createElement('script');
    const scriptText = this.renderer.createText(`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0HR8V9K382');
    `);
    this.renderer.appendChild(script2, scriptText);
    this.renderer.appendChild(this.document.head, script2);
    
    console.log("Analytics cargado correctamente"); 
  }
}