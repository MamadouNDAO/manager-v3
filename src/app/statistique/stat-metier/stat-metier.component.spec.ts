import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatMetierComponent } from './stat-metier.component';

describe('StatMetierComponent', () => {
  let component: StatMetierComponent;
  let fixture: ComponentFixture<StatMetierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatMetierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatMetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
