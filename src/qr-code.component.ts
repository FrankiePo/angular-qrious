import {
  Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges,
  ViewChild
} from '@angular/core';
import { QRious } from 'qrious';

@Component({
  selector: 'qr-code',
  templateUrl: '<canvas #qrcode></canvas>'
})
export class QrCodeComponent implements OnChanges, OnDestroy {
  @Input() background: string = 'white';
  @Input() backgroundAlpha: number = 1.0;
  @Input() foreground: string = 'black';
  @Input() foregroundAlpha: number = 1.0;
  @Input() level: string = 'L';
  @Input() mime: string = 'image/png';
  @Input() padding: number = null;
  @Input() size: number = 100;
  @Input() value: string = '';

  @ViewChild('qrcode') private element: ElementRef;
  private qrcode: any;

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
    delete this.qrcode;
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
      this.qrcode = new QRious(config);
    } catch (e) {
      console.error(`update error: ${e.message}`);
    }
  }
}
