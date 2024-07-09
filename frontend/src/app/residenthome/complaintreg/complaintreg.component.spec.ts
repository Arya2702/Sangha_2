import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintregComponent } from './complaintreg.component';

describe('ComplaintregComponent', () => {
  let component: ComplaintregComponent;
  let fixture: ComponentFixture<ComplaintregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintregComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplaintregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
