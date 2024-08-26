import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreBoxComponent } from './more-box.component';

describe('MoreBoxComponent', () => {
  let component: MoreBoxComponent;
  let fixture: ComponentFixture<MoreBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
