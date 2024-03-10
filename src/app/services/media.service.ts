import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MediaSearchParams } from '../models/media-search-params.model';
import { catchError, map, timeout, of, throwError, Observable } from 'rxjs';
import { MediaSearchResult } from '../models/media-search-result.model';
import { Media } from '../models/media.model';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private readonly OMDB_API_URL = 'http://www.omdbapi.com/';
  private readonly timeoutLimit = 9000;

  private mediaSearchCacheMap = new Map<string, MediaSearchResult>();
  private mediaCacheMap = new Map<string, Media>();

  constructor(
    private http: HttpClient
  ) {}

  public searchMedias(params: MediaSearchParams): Observable<MediaSearchResult> {
    const cacheKey = params.toString();
    const cache = this.mediaSearchCacheMap.get(cacheKey);
    if (cache) {
      return of(cache);
    }

    return this.http.get(this.OMDB_API_URL, { params }).pipe(
      timeout(this.timeoutLimit),
      catchError(() => throwError(() => new Error('Media search failed!'))),
      map((result: any) => {
        if (result.Response === 'False') {
          throw new Error(result.Error);
        }
        const mediaSearchResult = new MediaSearchResult(result);
        this.mediaSearchCacheMap.set(cacheKey, mediaSearchResult);
        return mediaSearchResult;
      })
    );
  }

  public searchDetailedMedia(mediaId: string): Observable<Media> {
    const cache = this.mediaCacheMap.get(mediaId);
    if (cache) {
      return of(cache);
    }

    const params = new MediaSearchParams({ id: mediaId });
    return this.http.get(this.OMDB_API_URL, { params }).pipe(
      timeout(this.timeoutLimit),
      catchError(() => throwError(() => new Error('Failed to find Media!'))),
      map((result: any) => {
        if (result.Response === 'False') {
          throw new Error(result.Error);
        }
        const media = new Media(result);
        this.mediaCacheMap.set(mediaId, media);
        return media;
      })
    );
  }
}
