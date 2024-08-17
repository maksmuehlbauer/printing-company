import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExamplesComponent } from './company-examples.component';

describe('CompanyExamplesComponent', () => {
  let component: CompanyExamplesComponent;
  let fixture: ComponentFixture<CompanyExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyExamplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
