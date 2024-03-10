import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Media } from 'src/app/models/media.model';
import { EmptyPipe } from 'src/app/pipes/empty.pipe';
import { MediaService } from 'src/app/services/media.service';
import { NotificationService } from 'src/app/services/notification.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    EmptyPipe
  ],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss'
})
export class MediaCardComponent {
  @Input() media: Media;

  public detailedMedia: Media|null;
  public loading: boolean;

  constructor(
    private mediaService: MediaService,
    private notificationService: NotificationService,
    private storage: StorageService
  ) {}

  public searchDetailedMedia() {
    this.loading = true;
    this.mediaService.searchDetailedMedia(this.media.id).subscribe({
      next: (media) => {
        this.detailedMedia = media;
        this.loading = false;
      },
      error: (err) => {
        this.detailedMedia = null;
        this.loading = false;
        this.notificationService.notifyMessage(err.message);
      }
    });
  }

  public toggleFavorite(ev?: Event) {
    if (ev) ev.stopPropagation();
    this.storage.toggleFavoriteMedia(this.media);
  }

  public get favoriteFontIcon(): string {
    return this.storage.isFavoriteMedia(this.media.id) ? 'favorite' : 'favorite_border';
  }
}
