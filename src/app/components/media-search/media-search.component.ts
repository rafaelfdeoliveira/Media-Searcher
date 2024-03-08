import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MediaType } from '../../models/media-type.model';
import { MediaService } from 'src/app/services/media.service';
import { MediaSearchParams } from 'src/app/models/media-search-params.model';

@Component({
  selector: 'app-media-search',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './media-search.component.html',
  styleUrl: './media-search.component.scss'
})
export class MediaSearchComponent implements OnInit {

  public form: FormGroup;
  public mediaTypes = [
    MediaType.MOVIE,
    MediaType.SERIES,
    MediaType.EPISODE
  ];

  constructor(
    private mediaService: MediaService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  public searchMedia() {
    if (this.form.invalid) return;
    const params = new MediaSearchParams(this.form.value);
    this.mediaService.searchMedia(params).subscribe((result) => {
      console.log('result = ', result)
    });
  }

  public resetForm() {
    this.form.reset();
  }

  private initForm() {
    const searchTerm = new FormControl(null, [Validators.required]);
    const year = new FormControl(null);
    const type = new FormControl(null);
    this.form = new FormGroup({searchTerm, year, type});
  }
}
