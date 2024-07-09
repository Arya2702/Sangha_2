import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResRegComponent } from './res-reg.component';

describe('ResRegComponent', () => {
  let component: ResRegComponent;
  let fixture: ComponentFixture<ResRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResRegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
