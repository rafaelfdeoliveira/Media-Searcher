import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMoviesPage } from './favorite-movies.page';

describe('FavoriteMoviesComponent', () => {
  let component: FavoriteMoviesPage;
  let fixture: ComponentFixture<FavoriteMoviesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteMoviesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
