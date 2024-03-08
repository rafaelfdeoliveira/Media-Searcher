import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() showHomePageBtn: boolean;
  @Input() showFavoriteMoviesPageBtn: boolean;
  @Input() showFavoriteMoviesListClearBtn: boolean;
  @Input() title: string;

  constructor(
    public navigation: NavigationService
  ) {}
}
