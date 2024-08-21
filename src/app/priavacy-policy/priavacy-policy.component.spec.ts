import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriavacyPolicyComponent } from './priavacy-policy.component';

describe('PriavacyPolicyComponent', () => {
  let component: PriavacyPolicyComponent;
  let fixture: ComponentFixture<PriavacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriavacyPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriavacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
