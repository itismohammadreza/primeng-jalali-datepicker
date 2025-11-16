# primeng-jalali-datepicker

A Jalali (Persian) datepicker for Angular based on PrimeNG DatePicker, fully adapted to the Persian calendar.
## Features

- Fully compatible with Angular 20+ and PrimeNG 20+
- Persian (Jalali) calendar support
- Easy to integrate into existing Angular projects
- Supports forms with ReactiveFormsModule or Template-driven Forms
- Customizable styling with PrimeNG themes

## Installation

```bash
npm install primeng-jalali-datepicker jalali-moment
```

Make sure you have PrimeNG 20+ and Angular 20+ installed.

## Usage/Examples

Import the module in your Angular module:

```typescript
// for module-based projects:
import { JalaliDatepickerModule } from 'primeng-jalali-datepicker';

@NgModule({
  imports: [
    JalaliDatepickerModule,
    // other modules
  ]
})
export class AppModule {}
```

```typescript
// for standalone projects:
import { JalaliDatepickerModule } from 'primeng-jalali-datepicker';
import { Moment } from 'jalali-moment';

@Component({
  selector: 'app-root',
  template: `
    <p-jalali-datepicker [(ngModel)]="selectedDate"></p-jalali-datepicker>
  `,
  imports: [
    JalaliDatepickerModule,
    // other modules
  ]
})
export class AppComponent {
  selectedDate: Date | Moment;
}
```

Use it in a template:

```html
<p-jalali-datepicker [(ngModel)]="selectedDate"></p-jalali-datepicker>
```

or with Reactive Forms:

```html
<form [formGroup]="form">
  <p-jalali-datepicker formControlName="date"></p-jalali-datepicker>
</form>
```



## Inputs / Outputs

This component extends all inputs, outputs, and events of PrimeNG DatePicker.
You can find the official documentation here: [PrimeNG Datepicker Documentation](https://primeng.org/datepicker)

Additionally, this library provides:

| Input |  Type  | Description |
|:-----|:--------:|:------|
| isJalali   | boolean | When true, the datepicker works with the Jalali (Persian) calendar using `jalali-moment`. Pass a Moment object if `[isJalali]="true"`, or a `Date` object for Gregorian.

## License

MIT
