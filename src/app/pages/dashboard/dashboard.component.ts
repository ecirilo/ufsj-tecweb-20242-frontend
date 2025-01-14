import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {TPalestra} from "../../model/palestra.model";
import {PalestraService} from "../../service/palestra.service";

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    items!: MenuItem[];

    palestras!: TPalestra[];

    constructor(
        private palestraService: PalestraService
    ) { }

    ngOnInit() {
        this.palestraService.getAll().subscribe((_palestras: TPalestra[]): TPalestra[] => this.palestras = _palestras);

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }
}
