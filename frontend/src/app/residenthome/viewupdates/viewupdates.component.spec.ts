import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewupdatesComponent } from './viewupdates.component';

describe('ViewupdatesComponent', () => {
  let component: ViewupdatesComponent;
  let fixture: ComponentFixture<ViewupdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewupdatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
