import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatActuComponent } from './stat-actu.component';

describe('StatActuComponent', () => {
  let component: StatActuComponent;
  let fixture: ComponentFixture<StatActuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatActuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
