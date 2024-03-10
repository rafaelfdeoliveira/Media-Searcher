import { HttpParams, HttpParamsOptions } from "@angular/common/http";
import { MediaType } from "./media-type.model";

export class MediaSearchParams extends HttpParams {

  private static readonly apiKey = '266d59ed';

  constructor(data: {
      searchTerm?: string,
      id?: string,
      year?: number,
      type?: MediaType,
      page?: number
  }) {
    const options: HttpParamsOptions = {
      fromObject: { apikey: MediaSearchParams.apiKey }
    };
    if (data.searchTerm) {
      options.fromObject!['s'] = data.searchTerm;
      options.fromObject!['page'] = data.page || 1;
    }
    if (data.id) options.fromObject!['i'] = data.id;
    if (data.year) options.fromObject!['y'] = data.year;
    if (data.type) options.fromObject!['type'] = data.type;

    super(options);
  }

}
