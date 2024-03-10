export class Media {
  public id: string;
  public title: string;
  public type: string;
  public year: string;
  public posterUrl: string;
  public actors?: string;
  public country?: string;
  public director?: string;
  public genre?: string;
  public language?: string;
  public plot?: string;
  public releaseDate?: string;
  public writers?: string;
  public rating?: string;

  constructor(data: any) {
    this.id = data.imdbID;
    this.title = data.Title;
    this.type = data.Type;
    this.year = data.Year;
    this.posterUrl = data.Poster;
    if (data.Actors) this.actors = data.Actors;
    if (data.Country) this.country = data.Country;
    if (data.Director) this.director = data.Director;
    if (data.Genre) this.genre = data.Genre;
    if (data.Language) this.language = data.Language;
    if (data.Plot) this.plot = data.Plot;
    if (data.Released) this.releaseDate = data.Released;
    if (data.Writer) this.writers = data.Writer;
    if (data.imdbRating) this.rating = data.imdbRating;
  }

}
