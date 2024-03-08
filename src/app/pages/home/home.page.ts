import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MediaSearchComponent } from '../../components/media-search/media-search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MediaSearchComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {

  public loading: boolean;
}
