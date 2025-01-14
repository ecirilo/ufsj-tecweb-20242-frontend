import {Component} from '@angular/core';
import {TPalestra} from "../../../../model/palestra.model";
import {PalestraService} from "../../../../service/palestra.service";

@Component({
  selector: 'app-palestra-delete-dialog',
  templateUrl: './palestra-delete.dialog.component.html',
})
export class PalestraDeleteDialogComponent {

  palestra: TPalestra = <TPalestra>{};

  opened: boolean = false;
  submitted: boolean = false;

  constructor(
    private palestraService: PalestraService,
  ) {}

  open(id: number): void {
    this.palestraService.get(id).subscribe((_palestra: TPalestra): void => {
      this.palestra = _palestra;
      this.opened = true;
    });
  }

  onSave(): void {
    this.submitted = true;
    this.palestraService.delete(this.palestra.id).subscribe((): void => {
      this.opened = false;
    });
  }

  onClose(): void {
    this.opened = false;
  }
}
