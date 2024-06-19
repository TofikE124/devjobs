import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsLoadingComponent } from './job-details-loading.component';

describe('JobDetailsLoadingComponent', () => {
  let component: JobDetailsLoadingComponent;
  let fixture: ComponentFixture<JobDetailsLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailsLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobDetailsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
