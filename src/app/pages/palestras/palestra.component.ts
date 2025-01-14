import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageService} from 'primeng/api';
import {TPalestra} from "../../model/palestra.model";
import {PalestraService} from "../../service/palestra.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {PalestraUpdateDialogComponent} from "./components/palestra-update-dialog/palestra-update.dialog.component";

@Component({
    templateUrl: './palestra.component.html',
    providers: [MessageService, DialogService]
})
export class PalestraComponent implements OnInit {

    @ViewChild('palestraUpdateDialog') palestraUpdateDialog!: PalestraUpdateDialogComponent;
    @ViewChild('palestraDeleteDialog') palestraDeleteDialog!: PalestraUpdateDialogComponent;

    palestras: TPalestra[] = [];

    palestra: Partial<TPalestra> = {};

    submitted: boolean = false;

    cols: any[] = [];

    constructor(
        private palestraService: PalestraService,
    ) { }

    ngOnInit(): void {
        this.palestraService.getAll().subscribe((body: TPalestra[]): void => {
            this.palestras = body;
        });

        this.cols = [
            { field: 'id', header: 'id' },
            { field: 'titulo', header: 'Titulo' },
            { field: 'palestrante', header: 'Palestrante' },
            { field: 'dataHora', header: 'Data/Hora' },
        ];
    }

    onOpenNew(): void {
        this.palestraUpdateDialog.open();
    }

    onEdit(palestra: TPalestra): void {
        this.palestraUpdateDialog.open(palestra.id);
    }

    onDelete(palestra: TPalestra) {
        this.palestraDeleteDialog.open(palestra.id);
    }

    onSave(): void {
        this.submitted = true;


    }
}
