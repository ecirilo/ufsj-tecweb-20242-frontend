import {AfterViewInit, Component, OnInit, signal, ViewChild, WritableSignal} from '@angular/core';
import {MessageService} from 'primeng/api';
import {DialogService} from "primeng/dynamicdialog";
import {TPresenca} from "../../model/presenca.model";
import {PresencaService} from "../../service/presenca.service";
import {
  PalestraUpdateDialogComponent
} from "../palestras/components/palestra-update-dialog/palestra-update.dialog.component";
import {NgxScannerQrcodeComponent, ScannerQRCodeConfig, ScannerQRCodeResult} from "ngx-scanner-qrcode";
import {PalestraService} from "../../service/palestra.service";
import {TPalestra} from "../../model/palestra.model";
import {catchError, debounceTime, distinctUntilChanged, filter, Observable, of, switchMap, tap, timer} from "rxjs";
import dayjs from "dayjs";
import {AlunoService} from "../../service/aluno.service";
import {TAluno} from "../../model/aluno.model";
import {FormControl} from "@angular/forms";

@Component({
  templateUrl: './comparecimento.component.html',
  providers: [MessageService, DialogService]
})
export class ComparecimentoComponent implements OnInit, AfterViewInit {

  @ViewChild('scanner') scanner!: NgxScannerQrcodeComponent;

  config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth,
      },
    },
  }

  palestra: WritableSignal<TPalestra | undefined> = signal<TPalestra | undefined>(undefined);
  aluno: WritableSignal<TAluno | undefined> = signal<TAluno | undefined>(undefined);
  presenca: WritableSignal<TPresenca | undefined> = signal<TPresenca | undefined>(undefined);

  matriculaFormControl: FormControl<String | null> = new FormControl('');

  private lastScannedCode: string | null = null;

  constructor(
    private readonly alunoService: AlunoService,
    private readonly palestraService: PalestraService,
    private readonly presencaSevice: PresencaService,
  ) { }

  ngOnInit(): void {
    this.registerListeners();
  }

  ngAfterViewInit(): void {
    this.scanner.isReady.subscribe((res: any) => {
      this.handlerScannerStatus('start');
    });
  }

  onReadQrCode(results: ScannerQRCodeResult[], scanner?: any): void {
    if (results.length === 0) {
      return;
    }

    const qrCode: string = results[0].value;

    if (this.lastScannedCode === qrCode) {
      return;
    }

    this.lastScannedCode = qrCode;

    this.palestraService.get(Number(qrCode)).subscribe((_palestra: TPalestra): void => {
      this.palestra.set(_palestra);
      this.handlerScannerStatus('stop')
    });
  }

  onPresente(): void {
    if (!this.palestra() || !this.aluno()) {
      return;
    }

    const presenca: TPresenca = {
      aluno: this.aluno()!,
      palestra: this.palestra()!
    };

    this.presencaSevice.create(presenca).subscribe((_presenca: TPresenca): void => {
      this.presenca.set(_presenca);
    });
  }

  private handlerScannerStatus(status: 'start' | 'stop'): void {
    const playDeviceFacingBack = (devices: any[]): void => {
      const device = devices.find((_device: any): boolean =>
        /back|rear|environment/gi.test(_device.label)
      );
      this.scanner.playDevice(device ? device.deviceId : devices[0].deviceId);
    };

    this.scanner[status](playDeviceFacingBack).subscribe(
      (r: any): void => console.log('start', r),
    );
  }

  private registerListeners(): void {
    this.matriculaFormControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((_matricula: String | null): boolean => /^\d{11}$/.test(_matricula?.toString() ?? '')),
      switchMap((_matricula: String | null): Observable<TAluno | undefined> =>
        this.alunoService.getByMatricula(_matricula?.toString() ?? '').pipe(
          catchError((): Observable<undefined> => {
            this.aluno.set(undefined) ;
            return of(undefined);
          })
        ))
    ).subscribe((_aluno: TAluno | undefined): void => {
      this.aluno.set(_aluno);
    });
  }

  protected readonly dayjs = dayjs;
}
