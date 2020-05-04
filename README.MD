# angular-qrious
![CI](https://github.com/FrankiePo/angular-qrious/workflows/CI/badge.svg?branch=master)
[![npm](https://img.shields.io/npm/v/angular-qrious)](https://www.npmjs.com/package/angular-qrious)

## DEMO

https://stackblitz.com/edit/angular-qrious-demo

## Installation

To install this library, run:

```bash
npm install angular-qrious --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
npm install angular-qrious
```

and then from your Angular `AppModule`:

```typescript
// Import library
import { QriousModule } from 'angular-qrious';

@NgModule({
  imports: [
    ...
    QriousModule
  ],
})
export class AppModule { }
```

Once your library is imported, you can use its component in your Angular application:

```html
<qr-code [value]="'Qrious'" [size]="124"></qr-code>
```

## License

MIT © [Sergey Koshechkin](mailto:serge.koshechkin@gmail.com)
