import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOfTheWeekBanner } from './game-of-the-week-banner';

describe('GameOfTheWeekBanner', () => {
  let component: GameOfTheWeekBanner;
  let fixture: ComponentFixture<GameOfTheWeekBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameOfTheWeekBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameOfTheWeekBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
