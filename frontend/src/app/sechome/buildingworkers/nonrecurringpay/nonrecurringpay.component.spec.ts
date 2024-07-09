import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonrecurringpayComponent } from './nonrecurringpay.component';

describe('NonrecurringpayComponent', () => {
  let component: NonrecurringpayComponent;
  let fixture: ComponentFixture<NonrecurringpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonrecurringpayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonrecurringpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
