import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReservationComponent } from './data-reservation.component';

describe('DataReservationComponent', () => {
  let component: DataReservationComponent;
  let fixture: ComponentFixture<DataReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
