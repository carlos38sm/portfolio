import { Component } from '@angular/core';

@Component({
  selector: 'app-cv-tile',
  templateUrl: './cv-tile.html',
  styleUrl: './cv-tile.scss'
})
export class CvTile {

  download() {
    const link = document.createElement('a');
    link.href = '/assets/cv.pdf';
    link.download = 'Carlos_Sanchez_Miranda_CV.pdf';
    link.click();
  }
}