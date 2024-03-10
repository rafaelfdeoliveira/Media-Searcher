import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { MediaSearchResult } from 'src/app/models/media-search-result.model';
import { MediaCardComponent } from '../media-card/media-card.component';

@Component({
  selector: 'app-media-results-area',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MediaCardComponent
  ],
  templateUrl: './media-results-area.component.html'
})
export class MediaResultsAreaComponent {
  @Input() result: MediaSearchResult;
  @Input() currentPage: number;

  @Output() newPageRequested = new EventEmitter<number>();

  public handlePage(evt: PageEvent) {
    this.newPageRequested.emit(evt.pageIndex + 1);
  }


}
