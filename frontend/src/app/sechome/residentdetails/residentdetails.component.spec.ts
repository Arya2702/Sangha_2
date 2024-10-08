import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentdetailsComponent } from './residentdetails.component';

describe('ResidentdetailsComponent', () => {
  let component: ResidentdetailsComponent;
  let fixture: ComponentFixture<ResidentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResidentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
