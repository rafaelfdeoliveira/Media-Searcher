import { Injectable } from '@angular/core';
import { Media } from '../models/media.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly favoriteMediasKey = 'favorite-medias';
  private favoriteMediasMap: Map<string,Media>;

  constructor() {
    this.initFavoriteMediasMap();
  }

  public get favoriteMedias(): IterableIterator<Media> {
    return this.favoriteMediasMap.values();
  }

  public isFavoriteMedia(mediaId: string): boolean {
    return this.favoriteMediasMap.has(mediaId);
  }

  public toggleFavoriteMedia(newMedia: Media) {
    if (this.favoriteMediasMap.has(newMedia.id)) {
      this.favoriteMediasMap.delete(newMedia.id);
    } else {
      this.favoriteMediasMap.set(newMedia.id, newMedia);
    }
    this.saveFavoriteMedias();
  }

  public clearFavoriteMedias() {
    localStorage.removeItem(this.favoriteMediasKey);
    this.favoriteMediasMap = new Map<string,Media>();
  }

  private initFavoriteMediasMap() {
    const savedData = localStorage.getItem(this.favoriteMediasKey);
    this.favoriteMediasMap = savedData ? JSON.parse(savedData, this.mapReviver) : new Map<string,Media>();
  }

  private saveFavoriteMedias() {
    localStorage.setItem(this.favoriteMediasKey, JSON.stringify(this.favoriteMediasMap, this.mapReplacer));
  }

  private mapReplacer(key: string, value: any) {
    return value instanceof Map
      ? { dataType: 'Map', value: [...value] }
      : value;
  }

  private mapReviver(key: string, value: any) {
    return typeof value === 'object' && value !== null && value.dataType === 'Map'
      ? new Map<string, Media>(value.value)
      : value;
  }
}
