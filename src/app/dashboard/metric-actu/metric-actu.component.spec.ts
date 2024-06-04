import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricActuComponent } from './metric-actu.component';

describe('MetricActuComponent', () => {
  let component: MetricActuComponent;
  let fixture: ComponentFixture<MetricActuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricActuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
