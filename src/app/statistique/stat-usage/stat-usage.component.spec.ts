import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatUsageComponent } from './stat-usage.component';

describe('StatUsageComponent', () => {
  let component: StatUsageComponent;
  let fixture: ComponentFixture<StatUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatUsageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
