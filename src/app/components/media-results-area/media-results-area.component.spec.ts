import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaResultsAreaComponent } from './media-results-area.component';

describe('MediaResultsAreaComponent', () => {
  let component: MediaResultsAreaComponent;
  let fixture: ComponentFixture<MediaResultsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaResultsAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaResultsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
