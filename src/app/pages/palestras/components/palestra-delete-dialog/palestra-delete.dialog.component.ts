import {Component} from '@angular/core';
import {TPalestra} from "../../../../model/palestra.model";
import {PalestraService} from "../../../../service/palestra.service";
import {Observable, Subject} from "rxjs";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-palestra-delete-dialog',
  templateUrl: './palestra-delete.dialog.component.html',
})
export class PalestraDeleteDialogComponent {

  palestra: TPalestra = <TPalestra>{};

  opened: boolean = false;
  submitted: boolean = false;

  private closeSubject: Subject<void> = new Subject<void>();

  constructor(
    private palestraService: PalestraService,
    private messageService: MessageService,
  ) {}

  open(id: number): Observable<void> {
    this.palestraService.get(id).subscribe((_palestra: TPalestra): void => {
      this.palestra = _palestra;
      this.opened = true;
    });

    return this.closeSubject.asObservable();
  }

  onSave(): void {
    this.submitted = true;
    this.palestraService.delete(this.palestra.id).subscribe((): void => {
      this.opened = false;
      this.submitted = false;
      this.closeSubject.next();
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Palestra Excluida', life: 3000 });
    });
  }

  onClose(): void {
    this.opened = false;
    this.closeSubject.next();
  }
}
