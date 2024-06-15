import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSectionSmallComponent } from './search-section-small.component';

describe('SearchSectionSmallComponent', () => {
  let component: SearchSectionSmallComponent;
  let fixture: ComponentFixture<SearchSectionSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSectionSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchSectionSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
