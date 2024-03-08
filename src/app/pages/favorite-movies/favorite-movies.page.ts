import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-favorite-movies',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './favorite-movies.page.html',
  styleUrl: './favorite-movies.page.scss'
})
export class FavoriteMoviesPage {

}
