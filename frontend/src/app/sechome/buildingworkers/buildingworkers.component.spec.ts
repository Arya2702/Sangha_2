import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingworkersComponent } from './buildingworkers.component';

describe('BuildingworkersComponent', () => {
  let component: BuildingworkersComponent;
  let fixture: ComponentFixture<BuildingworkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingworkersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingworkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
