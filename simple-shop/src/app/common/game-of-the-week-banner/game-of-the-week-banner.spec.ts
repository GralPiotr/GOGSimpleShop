import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameOfTheWeekBanner } from './game-of-the-week-banner';
import { Product } from '@models/product.model';
import { By } from '@angular/platform-browser';

describe('GameOfTheWeekBanner', () => {
  let component: GameOfTheWeekBanner;
  let fixture: ComponentFixture<GameOfTheWeekBanner>;

  const mockProduct: Product = {
    id: '1',
    name: 'Wiedźmin 3: Dziki Gon',
    price: 39.99,
    discount: 20,
    imgUrl: 'https://example.com/witcher3.jpg',
    isFeatured: true,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GameOfTheWeekBanner],
    });

    fixture = TestBed.createComponent(GameOfTheWeekBanner);
    component = fixture.componentInstance;
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addToCart event on click', () => {
    spyOn(component.addToCart, 'emit');
    component.onClick();
    expect(component.addToCart.emit).toHaveBeenCalledWith(mockProduct);
  });

  it('should render product name in image alt attribute', () => {
    const img = fixture.debugElement.query(By.css('img')).nativeElement as HTMLImageElement;
    expect(img.alt).toBe('Wiedźmin 3: Dziki Gon');
  });
});
