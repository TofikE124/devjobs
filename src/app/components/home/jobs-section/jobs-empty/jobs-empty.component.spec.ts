import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsEmptyComponent } from './jobs-empty.component';

describe('JobsEmptyComponent', () => {
  let component: JobsEmptyComponent;
  let fixture: ComponentFixture<JobsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsEmptyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
