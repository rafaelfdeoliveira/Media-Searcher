import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMediasPage } from './favorite-medias.page';

describe('FavoriteMediasComponent', () => {
  let component: FavoriteMediasPage;
  let fixture: ComponentFixture<FavoriteMediasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteMediasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteMediasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
