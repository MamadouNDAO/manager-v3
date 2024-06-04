import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatEnvironnementComponent } from './stat-environnement.component';

describe('StatEnvironnementComponent', () => {
  let component: StatEnvironnementComponent;
  let fixture: ComponentFixture<StatEnvironnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatEnvironnementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatEnvironnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
