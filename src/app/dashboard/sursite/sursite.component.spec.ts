import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SursiteComponent } from './sursite.component';

describe('SursiteComponent', () => {
  let component: SursiteComponent;
  let fixture: ComponentFixture<SursiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SursiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SursiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
