import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringpayComponent } from './recurringpay.component';

describe('RecurringpayComponent', () => {
  let component: RecurringpayComponent;
  let fixture: ComponentFixture<RecurringpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecurringpayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecurringpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
