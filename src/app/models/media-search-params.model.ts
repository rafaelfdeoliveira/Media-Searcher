import { HttpParams, HttpParamsOptions } from "@angular/common/http";
import { MediaType } from "./media-type.model";

export class MediaSearchParams extends HttpParams {

  private static readonly apiKey = process.env['OMDB_API_KEY'];

  constructor(data: {
      searchTerm: string,
      year?: number,
      type?: MediaType,
      page?: number
  }) {
    const options: HttpParamsOptions = {
      fromObject: { s: data.searchTerm, page: data.page || 1}
    };
    if (MediaSearchParams.apiKey) options.fromObject!['apikey'] = MediaSearchParams.apiKey;
    if (data.year) options.fromObject!['y'] = data.year;
    if (data.type) options.fromObject!['type'] = data.type;

    super(options);
  }

}
