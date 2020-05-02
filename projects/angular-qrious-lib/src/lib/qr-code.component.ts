import { Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import QRious from 'qrious';

@Component({
  selector: 'qr-code',
  template: '<canvas #qrcode></canvas>'
})
export class QrCodeComponent implements OnChanges, OnDestroy {
  @Input() background = 'white';
  @Input() backgroundAlpha = 1.0;
  @Input() foreground = 'black';
  @Input() foregroundAlpha = 1.0;
  @Input() level = 'L';
  @Input() mime = 'image/png';
  @Input() padding = null;
  @Input() size = 100;
  @Input() value = '';

  @ViewChild('qrcode', {static: true}) private element: ElementRef<HTMLCanvasElement>;
  public qrious: QRious;

  ngOnChanges(changes: SimpleChanges): void {
    const inputs = [
      'background',
      'backgroundAlpha',
      'foreground',
      'foregroundAlpha',
      'level',
      'mime',
      'padding',
      'size',
      'value',
    ];
    if (inputs.some(key => key in changes)) {
      this.update();
    }
  }

  ngOnDestroy() {
    delete this.qrious;
  }

  update() {
    try {
      const config = {
        background: this.background,
        backgroundAlpha: this.backgroundAlpha,
        foreground: this.foreground,
        foregroundAlpha: this.foregroundAlpha,
        level: this.level,
        mime: this.mime,
        padding: this.padding,
        size: this.size,
        value: this.value,
        element: this.element.nativeElement,
      };
      this.qrious = new QRious(config);
    } catch (e) {
      alert(e.message);
      console.error(`update error: ${e.message}`);
    }
  }
}
