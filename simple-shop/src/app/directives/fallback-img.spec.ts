import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import {FallbackImg} from './fallback-img';

@Component({
  imports: [
    FallbackImg
  ],
  template: `
    <img [src]="imgSrc" [fallbackSrc]="fallbackSrc" alt="Alt text"/>
  `
})
class TestHostComponent {
  imgSrc = 'invalid-image.jpg';
  fallbackSrc = 'fallback.jpg';
}

describe('FallbackImgDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FallbackImg, TestHostComponent] //
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should apply fallback image on error', () => {
    const imgDebugEl = fixture.debugElement.query(By.css('img'));
    const imgEl = imgDebugEl.nativeElement as HTMLImageElement;

    const event = new Event('error');
    imgEl.dispatchEvent(event);

    fixture.detectChanges();

    expect(imgEl.src).toContain('fallback.jpg');
  });

  it('should not retry fallback endlessly', () => {
    const imgDebugEl = fixture.debugElement.query(By.css('img'));
    const imgEl = imgDebugEl.nativeElement as HTMLImageElement;

    imgEl.dispatchEvent(new Event('error'));
    fixture.detectChanges();

    const firstFallbackSrc = imgEl.src;


    imgEl.dispatchEvent(new Event('error'));
    fixture.detectChanges();

    expect(imgEl.src).toBe(firstFallbackSrc);
    expect(imgEl.alt).toBe('Image not available');
  });

  it('should not change src if fallbackSrc is missing', () => {
    fixture.componentInstance.fallbackSrc = '';
    fixture.detectChanges();

    const imgEl = fixture.debugElement.query(By.css('img')).nativeElement as HTMLImageElement;
    imgEl.dispatchEvent(new Event('error'));
    fixture.detectChanges();

    expect(imgEl.src).toContain('invalid-image.jpg');
  });
});
