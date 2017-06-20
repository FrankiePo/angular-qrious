import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeComponent } from './qr-code.component';

export * from './qr-code.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ QrCodeComponent ],
  exports: [ QrCodeComponent ]
})
export class QriousModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: QriousModule,
    };
  }
}
