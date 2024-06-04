import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMetierComponent } from './data-metier.component';

describe('DataMetierComponent', () => {
  let component: DataMetierComponent;
  let fixture: ComponentFixture<DataMetierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataMetierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataMetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
