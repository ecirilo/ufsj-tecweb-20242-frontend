import {NgModule} from '@angular/core';
import {PalestraComponent} from './palestra.component';
import {SharedModule} from "../../shared/shared.module";
import {PalestraUpdateDialogComponent} from './components/palestra-update-dialog/palestra-update.dialog.component';
import {PalestraDeleteDialogComponent} from "./components/palestra-delete-dialog/palestra-delete.dialog.component";
import {PalestraRoutingModule} from "./palestra-routing.module";

@NgModule({
    imports: [
      SharedModule,
      PalestraRoutingModule
    ],
    declarations: [
      PalestraComponent,
      PalestraUpdateDialogComponent,
      PalestraDeleteDialogComponent
    ]
})
export class PalestraModule { }
