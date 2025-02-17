import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../../../shared/service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Serviços',
                items: [
                    { label: 'Alunos', icon: 'pi pi-fw pi-users', routerLink: ['/alunos'] },
                    { label: 'Palestras', icon: 'pi pi-fw pi-shield', routerLink: ['/palestras'] },
                    { label: 'Presenças', icon: 'pi pi-fw pi-check-circle', routerLink: ['/presencas'] },
                ]
            }
        ];
    }
}
