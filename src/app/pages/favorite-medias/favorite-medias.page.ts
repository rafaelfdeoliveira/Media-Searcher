import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MediaCardComponent } from 'src/app/components/media-card/media-card.component';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-favorite-medias',
  standalone: true,
  imports: [
    HeaderComponent,
    MediaCardComponent
  ],
  templateUrl: './favorite-medias.page.html'
})
export class FavoriteMediasPage {

  constructor(
    public storage: StorageService
  ) {}

}
