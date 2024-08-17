import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPresentationComponent } from './company-presentation.component';

describe('CompanyPresentationComponent', () => {
  let component: CompanyPresentationComponent;
  let fixture: ComponentFixture<CompanyPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
