import {Component} from '@angular/core';
import {JalaliDatepickerModule} from 'primeng-jalali-datepicker';
import {JsonPipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import moment, {Moment} from 'jalali-moment';
import {CheckboxChangeEvent, CheckboxModule} from 'primeng/checkbox';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [
    JalaliDatepickerModule,
    JsonPipe,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    Button
  ],
  templateUrl: './app.html',
})
export class App {
  isJalali: boolean = true;
  selectedValue: string = null;
  defaultValue: Date | Moment = null;

  onDateChange(event: Date | Moment | (Date | Moment)[]): void {
    console.log(event);
    if (this.isJalali) {
      this.selectedValue = (event as Moment).format("jYYYY/jMM/jDD");
    } else {
      this.selectedValue = (event as Date).toISOString();
    }
  }

  onJalaliChange(value: CheckboxChangeEvent) {
    this.isJalali = value.checked;
    this.selectedValue = null;
    this.defaultValue = null;
  }

  onSetDefaultValue() {
    if (this.isJalali) {
      this.defaultValue = moment('1404/05/23', 'jYYYY/jMM/jDD');
      this.selectedValue = this.defaultValue.format("jYYYY/jMM/jDD");
    } else {
      this.defaultValue = new Date('2025-08-04');
      this.selectedValue = this.defaultValue.toISOString();
    }
  }
}
