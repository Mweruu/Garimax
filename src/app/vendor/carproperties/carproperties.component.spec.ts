import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpropertiesComponent } from './carproperties.component';

describe('CarpropertiesComponent', () => {
  let component: CarpropertiesComponent;
  let fixture: ComponentFixture<CarpropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
