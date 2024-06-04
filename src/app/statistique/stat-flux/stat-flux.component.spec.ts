import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatFluxComponent } from './stat-flux.component';

describe('StatFluxComponent', () => {
  let component: StatFluxComponent;
  let fixture: ComponentFixture<StatFluxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatFluxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatFluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
