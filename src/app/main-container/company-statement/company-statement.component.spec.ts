import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStatementComponent } from './company-statement.component';

describe('CompanyStatementComponent', () => {
  let component: CompanyStatementComponent;
  let fixture: ComponentFixture<CompanyStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyStatementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
