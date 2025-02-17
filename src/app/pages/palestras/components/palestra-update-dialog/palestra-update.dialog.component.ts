import {Component, OnDestroy, OnInit, signal, WritableSignal} from '@angular/core';
import {TPalestra} from "../../../../model/palestra.model";
import {PalestraService} from "../../../../service/palestra.service";
import {MessageService} from "primeng/api";
import {Observable, Subject, takeUntil} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'app-palestra-update-dialog',
    templateUrl: './palestra-update.dialog.component.html',
    styleUrls: ['./palestra-update.dialog.component.scss']
})
export class PalestraUpdateDialogComponent implements OnDestroy {

  palestra: TPalestra = <TPalestra>{ dataHora: new Date(2024, 10, 25) };

  opened: boolean = false;
  submitted: boolean = false;

  minDate!: Date;
  maxDate!: Date;

  formGroup = this.fb.group({
    id: [0],
    titulo: ['', Validators.required],
    palestrante: ['', Validators.required],
    descricao: ['', Validators.required],
    dataHora: [new Date(2024, 10, 25), Validators.required]
  });

  qrCode: WritableSignal<string> = signal('');

  private closeSubject$: Subject<void> = new Subject<void>();
  private unsubscribeSink$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly fb: FormBuilder,
    private readonly palestraService: PalestraService,
    private readonly messageService: MessageService,
  ) {
    this.minDate = new Date(2024, 10, 25);
    this.maxDate = new Date(2024, 10, 29);
  }

  ngOnDestroy(): void {
    this.unsubscribeSink$.next(true);
    this.unsubscribeSink$.complete();
  }

  open(id?: number | null): Observable<void> {
    if (id) {
      this.palestraService.get(id).subscribe((_palestra: TPalestra): void => {
        this.palestra = _palestra;
        this.updateForm();
        this.generateQRCode();
      });
    }

    this.opened = true;
    return this.closeSubject$.asObservable();
  }

  onTimeSelect(event: any): void {
    this.palestra.dataHora.setHours(event.getHours());
    this.palestra.dataHora.setMinutes(event.getMinutes());
  }

  onSave(): void {
    this.submitted = true;
    const palestra: TPalestra = this.createFromForm();

    if (this.palestra.id) {
      this.palestraService.update(palestra)
          .pipe(takeUntil(this.unsubscribeSink$))
          .subscribe((_palestra: TPalestra): void => {
            this.complete();
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Palestra Atualizada', life: 3000 });
          });
    } else {
      this.palestraService.create(palestra)
          .pipe(takeUntil(this.unsubscribeSink$))
          .subscribe((_palestra: TPalestra): void => {
            this.complete();
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Palestra Criada', life: 3000 });
          });
    }
  }

  onClose(): void {
    this.complete();
  }

  private updateForm(): void {
    this.formGroup.patchValue({
      id: this.palestra.id,
      titulo: this.palestra.titulo,
      palestrante: this.palestra.palestrante,
      descricao: this.palestra.descricao,
      dataHora: this.palestra.dataHora
    })
  }

  private createFromForm(): TPalestra {
    return {
      id: this.formGroup.get(['id'])!.value,
      titulo: this.formGroup.get(['titulo'])!.value,
      palestrante: this.formGroup.get(['palestrante'])!.value,
      descricao: this.formGroup.get(['descricao'])!.value,
      dataHora: this.formGroup.get(['dataHora'])!.value
    };
  }

  private generateQRCode(): void {
    this.qrCode.set(this.palestra.id ? this.palestra.id.toString() : '')
  }

  private complete(): void {
    this.opened = false;
    this.submitted = false;
    this.palestra = <TPalestra>{};
    this.formGroup.reset();
    this.closeSubject$.next();
  }
}
