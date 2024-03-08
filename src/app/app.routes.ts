import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { FavoriteMoviesPage } from './pages/favorite-movies/favorite-movies.page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'favorite-movies',
    component: FavoriteMoviesPage
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
