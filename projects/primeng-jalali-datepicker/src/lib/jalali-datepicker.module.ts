import {CommonModule, NgTemplateOutlet} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "primeng/api";
import {AutoFocus, AutoFocusModule} from "primeng/autofocus";
import {Button, ButtonModule} from "primeng/button";
import {DatePickerModule} from "primeng/datepicker";
import {CalendarIcon} from "primeng/icons/calendar";
import {ChevronDownIcon} from "primeng/icons/chevrondown";
import {ChevronLeftIcon} from "primeng/icons/chevronleft";
import {ChevronRightIcon} from "primeng/icons/chevronright";
import {ChevronUpIcon} from "primeng/icons/chevronup";
import {TimesIcon} from "primeng/icons/times";
import {InputText, InputTextModule} from "primeng/inputtext";
import {Ripple, RippleModule} from "primeng/ripple";
import {JalaliDatepickerComponent} from "./jalali-datepicker.component";

@NgModule({
  declarations: [JalaliDatepickerComponent],
  exports: [JalaliDatepickerComponent],
  imports: [
    DatePickerModule,
    ButtonModule,
    RippleModule,
    AutoFocusModule,
    InputTextModule,
    NgTemplateOutlet,
    FormsModule,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    TimesIcon,
    CalendarIcon,
    CommonModule,
    Button,
    Ripple,
    AutoFocus,
    InputText,
    SharedModule
  ],
})
export class JalaliDatepickerModule {
}
