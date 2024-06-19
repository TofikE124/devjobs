import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSekeletonComponent } from './job-sekeleton.component';

describe('JobSekeletonComponent', () => {
  let component: JobSekeletonComponent;
  let fixture: ComponentFixture<JobSekeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSekeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobSekeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
