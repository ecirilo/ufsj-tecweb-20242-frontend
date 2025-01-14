import {Component} from '@angular/core';
import {TPalestra} from "../../../../model/palestra.model";
import {PalestraService} from "../../../../service/palestra.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-palestra-update-dialog',
  templateUrl: './palestra-update.dialog.component.html',
})
export class PalestraUpdateDialogComponent {

  palestra: TPalestra = <TPalestra>{};

  opened: boolean = false;
  submitted: boolean = false;

  constructor(
    private palestraService: PalestraService,
    private messageService: MessageService,
  ) {}

  open(id?: number | null): void {
    if (id) {
      this.palestraService.get(id).subscribe((_palestra: TPalestra): void => {
        this.palestra = _palestra;
        console.log("=========")
        console.log(this.palestra);
        console.log("=========")
      });
    }

    this.opened = true;
  }

  onSave(): void {
    this.submitted = true;

    if (this.palestra.id) {
      this.palestraService.update(this.palestra as TPalestra)
          .subscribe((_palestra: TPalestra): void => {
            this.opened = false;
            this.submitted = false;
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Palestra Atualizada', life: 3000 });
          });
    } else {
      this.palestraService.create(this.palestra as TPalestra)
          .subscribe((_palestra: TPalestra): void => {
            this.opened = false;
            this.submitted = false;
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Palestra Criada', life: 3000 });
          });
    }
  }

  onClose(): void {
    this.opened = false;
    this.palestra = <TPalestra>{};
  }
}
