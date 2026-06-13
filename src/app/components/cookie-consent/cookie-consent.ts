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
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'src', 'https://www.googletagmanager.com/gtag/js?id=G-0HR8V9K382');
    this.renderer.setAttribute(script, 'async', 'true');
    this.renderer.appendChild(this.document.head, script);

    const navWindow = window as any;
    navWindow.dataLayer = navWindow.dataLayer || [];
    navWindow.gtag = function() { navWindow.dataLayer.push(arguments); };
    
    navWindow.gtag('js', new Date());
    navWindow.gtag('config', 'G-0HR8V9K382'); 
    
    console.log("Analytics ejecutado nativamente en Angular"); 
  }
}