import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router
  ) {}

  public goToHomePage() {
    this.router.navigate(['home']);
  }

  public goToFavoriteMoviesPage() {
    this.router.navigate(['favorite-movies']);
  }
}
