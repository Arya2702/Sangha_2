import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecloginComponent } from './seclogin.component';

describe('SecloginComponent', () => {
  let component: SecloginComponent;
  let fixture: ComponentFixture<SecloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
