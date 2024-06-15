import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSectionLargeComponent } from './search-section-large.component';

describe('SearchSectionLargeComponent', () => {
  let component: SearchSectionLargeComponent;
  let fixture: ComponentFixture<SearchSectionLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSectionLargeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchSectionLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
