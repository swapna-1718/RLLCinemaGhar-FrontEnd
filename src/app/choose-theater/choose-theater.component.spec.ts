import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTheaterComponent } from './choose-theater.component';

describe('ChooseTheaterComponent', () => {
  let component: ChooseTheaterComponent;
  let fixture: ComponentFixture<ChooseTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTheaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
