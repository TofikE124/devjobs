import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobHeaderLoadingComponent } from './job-header-loading.component';

describe('JobHeaderLoadingComponent', () => {
  let component: JobHeaderLoadingComponent;
  let fixture: ComponentFixture<JobHeaderLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobHeaderLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobHeaderLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
