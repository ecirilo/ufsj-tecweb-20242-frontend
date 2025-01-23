import {Component} from '@angular/core';
import {TPalestra} from "../../../../model/palestra.model";
import {PalestraService} from "../../../../service/palestra.service";
import {MessageService} from "primeng/api";
import {Observable, Subject} from "rxjs";

@Component({
    selector: 'app-palestra-update-dialog',
    templateUrl: './palestra-update.dialog.component.html',
    styleUrls: ['./palestra-update.dialog.component.scss']
})
export class PalestraUpdateDialogComponent {

  palestra: TPalestra = <TPalestra>{ dataHora: new Date(2024, 10, 25) };

  opened: boolean = false;
  submitted: boolean = false;

  minDate!: Date;
  maxDate!: Date;

  private closeSubject: Subject<void> = new Subject<void>();

  constructor(
    private palestraService: PalestraService,
    private messageService: MessageService,
  ) {
    this.minDate = new Date(2024, 10, 25);
    this.maxDate = new Date(2024, 10, 29);
  }

  open(id?: number | null): Observable<void> {
    if (id) {
      this.palestraService.get(id).subscribe((_palestra: TPalestra): void => {
        this.palestra = _palestra;
      });
    }

    this.opened = true;
    return this.closeSubject.asObservable();
  }

  onTimeSelect(event: any): void {
    this.palestra.dataHora.setHours(event.getHours());
    this.palestra.dataHora.setMinutes(event.getMinutes());
  }

  onSave(): void {
    this.submitted = true;

    if (this.palestra.id) {
      this.palestraService.update(this.palestra as TPalestra)
          .subscribe((_palestra: TPalestra): void => {
            this.opened = false;
            this.submitted = false;
            this.closeSubject.next();
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Palestra Atualizada', life: 3000 });
          });
    } else {
      this.palestraService.create(this.palestra as TPalestra)
          .subscribe((_palestra: TPalestra): void => {
            this.opened = false;
            this.submitted = false;
            this.closeSubject.next();
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Palestra Criada', life: 3000 });
          });
    }
  }

  onClose(): void {
    this.opened = false;
    this.submitted = false;
    this.palestra = <TPalestra>{};
    this.closeSubject.next();
  }
}
