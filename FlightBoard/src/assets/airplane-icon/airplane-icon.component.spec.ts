import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneIconComponent } from './airplane-icon.component';

describe('AirplaneIconComponent', () => {
  let component: AirplaneIconComponent;
  let fixture: ComponentFixture<AirplaneIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirplaneIconComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
