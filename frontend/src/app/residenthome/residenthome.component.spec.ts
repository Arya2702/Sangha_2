import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenthomeComponent } from './residenthome.component';

describe('ResidenthomeComponent', () => {
  let component: ResidenthomeComponent;
  let fixture: ComponentFixture<ResidenthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidenthomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResidenthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
