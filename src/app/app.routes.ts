import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'musarum', loadComponent: () => import('./pages/musarum-detail/musarum-detail').then(m => m.MusarumDetail) },
  { path: 'experience', loadComponent: () => import('./pages/experience-detail/experience-detail').then(m => m.ExperienceDetail) },
  { path: 'projects', loadComponent: () => import('./pages/projects-detail/projects-detail').then(m => m.ProjectsDetail) },
  { path: 'education', loadComponent: () => import('./pages/education-detail/education-detail').then(m => m.EducationDetail) },
];