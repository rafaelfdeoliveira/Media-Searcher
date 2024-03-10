import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { FavoriteMediasPage } from './pages/favorite-medias/favorite-medias.page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'favorite-medias',
    component: FavoriteMediasPage
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
