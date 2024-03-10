import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MediaSearchComponent } from '../../components/media-search/media-search.component';
import { MediaSearchParams } from 'src/app/models/media-search-params.model';
import { MediaService } from 'src/app/services/media.service';
import { MediaSearchResult } from 'src/app/models/media-search-result.model';
import { NotificationService } from 'src/app/services/notification.service';
import { MediaResultsAreaComponent } from 'src/app/components/media-results-area/media-results-area.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MediaSearchComponent,
    MediaResultsAreaComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './home.page.html'
})
export class HomePage {

  public loading: boolean;
  public mediaSearchResult: MediaSearchResult|null;
  public mediaSearchParams: MediaSearchParams;

  constructor(
    private mediaService: MediaService,
    private notificationService: NotificationService
  ) {}

  public get currentPage(): number {
    return +this.mediaSearchParams.get('page')! - 1;
  }

  public searchMedias(params: MediaSearchParams) {
    this.loading = true;
    this.mediaSearchParams = params;
    this.mediaService.searchMedias(params).subscribe({
      next: (media) => {
        this.loading = false;
        this.mediaSearchResult = media;
      },
      error: (err) => {
        this.loading = false;
        this.notificationService.notifyMessage(err.message);
        this.mediaSearchResult = null;
      }
    });
  }

  public searchNewPage(page: number) {
    this.searchMedias(this.mediaSearchParams.set('page', page));
  }
}
