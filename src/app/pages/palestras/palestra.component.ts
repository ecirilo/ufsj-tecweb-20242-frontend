import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageService} from 'primeng/api';
import {TPalestra} from "../../model/palestra.model";
import {PalestraService} from "../../service/palestra.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {PalestraUpdateDialogComponent} from "./components/palestra-update-dialog/palestra-update.dialog.component";
import {Subject, take, takeUntil} from "rxjs";

@Component({
    templateUrl: './palestra.component.html',
    providers: [MessageService, DialogService]
})
export class PalestraComponent implements OnInit {

    @ViewChild('palestraUpdateDialog') palestraUpdateDialog!: PalestraUpdateDialogComponent;
    @ViewChild('palestraDeleteDialog') palestraDeleteDialog!: PalestraUpdateDialogComponent;

    palestras: TPalestra[] = [];

    palestra: Partial<TPalestra> = {};

    cols: any[] = [];

    private unsubscribeSink$: Subject<boolean> = new Subject<boolean>();

    constructor(
        private palestraService: PalestraService,
    ) { }

    ngOnInit(): void {
        this.cols = [
            { field: 'id', header: 'id' },
            { field: 'titulo', header: 'Titulo' },
            { field: 'palestrante', header: 'Palestrante' },
            { field: 'dataHora', header: 'Data/Hora' },
        ];

        this.fetchData();
    }

    onOpenNew(): void {
        this.palestraUpdateDialog.open()
          .pipe(take(1))
          .subscribe((): void => {
            this.fetchData();
        });
    }

    onEdit(palestra: TPalestra): void {
        this.palestraUpdateDialog.open(palestra.id)
          .pipe(take(1))
          .subscribe((): void => {
          this.fetchData();
        });
    }

    onDelete(palestra: TPalestra): void {
        this.palestraDeleteDialog.open(palestra.id)
          .pipe(take(1))
          .subscribe((): void => {
            this.fetchData();
        });
    }

    private fetchData(): void {
        this.palestraService.getAll()
          .pipe(takeUntil(this.unsubscribeSink$))
          .subscribe((body: TPalestra[]): void => {
            this.palestras = body;
        });
    }
}
