import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MediaSearchParams } from '../models/media-search-params.model';
import { Observable, map, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private readonly OMDB_API_URL = 'http://www.omdbapi.com/';
  private readonly timeoutLimit = 9000;

  constructor(
    private http: HttpClient
  ) {}

  public searchMedia(params: MediaSearchParams): Observable<any[]> {
    return this.http.get<any[]>(this.OMDB_API_URL, { params }).pipe(
      timeout(this.timeoutLimit),
      map((result) => result)
    );
  }
}
