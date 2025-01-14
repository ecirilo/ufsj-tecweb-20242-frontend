import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormatMediumDatePipe} from "./date/format-medium-date.pipe";


@NgModule({
  imports: [],
  declarations: [
    FormatMediumDatePipe
  ],
  exports: [
    FormatMediumDatePipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {}
