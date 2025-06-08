import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[fallbackSrc]',
  standalone: true
})
export class FallbackImg {
  @Input() fallbackSrc!: string;
  private triedFallback = false;

  @HostListener('error', ['$event.target'])
  onError(target: EventTarget | null) {
    const img = target as HTMLImageElement | null;

    if (!img) return;

    if (!this.triedFallback && this.fallbackSrc && img.src !== this.fallbackSrc) {
      this.triedFallback = true;
      img.removeAttribute('alt');
      img.src = this.fallbackSrc;
    } else {
      img.alt = img.alt || 'Image not available';
    }
  }
}
