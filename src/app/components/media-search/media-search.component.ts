import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MediaType } from '../../models/media-type.model';
import { MediaSearchParams } from 'src/app/models/media-search-params.model';

@Component({
  selector: 'app-media-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './media-search.component.html'
})
export class MediaSearchComponent implements OnInit {
  @Output() mediaSearchRequested = new EventEmitter<MediaSearchParams>();

  public form: FormGroup;
  public mediaTypes = [
    MediaType.MOVIE,
    MediaType.SERIES,
    MediaType.EPISODE
  ];

  ngOnInit() {
    this.initForm();
  }

  public requestMediaSearch() {
    if (this.form.invalid) return;
    const params = new MediaSearchParams(this.form.value);
    this.mediaSearchRequested.emit(params);
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
