import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { MusarumTile } from '../../components/musarum-tile/musarum-tile';
import { StackTile } from '../../components/stack-tile/stack-tile';
import { EducationTile } from '../../components/education-tile/education-tile';
import { CvTile } from '../../components/cv-tile/cv-tile';
import { ExperienceTile } from '../../components/experience-tile/experience-tile';
import { ContactTile } from '../../components/contact-tile/contact-tile';
import { ProjectsTile } from '../../components/projects-tile/projects-tile';

@Component({
  selector: 'app-home',
  imports: [
    Hero, MusarumTile, StackTile, EducationTile, 
    CvTile, ExperienceTile, ContactTile, 
    ProjectsTile, 
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home { }