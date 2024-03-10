import { Media } from "./media.model";

export class MediaSearchResult {
  public data: Media[];
  public total: number;

  constructor(data: any) {
    this.data = data.Search?.map((mediaData: any) => new Media(mediaData));
    this.total = +data.totalResults;
  }
}
