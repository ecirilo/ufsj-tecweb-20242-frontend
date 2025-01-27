import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {AppConfig, LayoutService} from "./layout/shared/service/app.layout.service";
import {UsuarioService} from "./service/usuario.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private readonly primengConfig: PrimeNGConfig,
        private readonly layoutService: LayoutService,
        private readonly usuarioService: UsuarioService,
    ) { }

    ngOnInit(): void {
        this.primengConfig.ripple = false;

        this.layoutService.config.ripple = false;
        this.layoutService.config.inputStyle = 'outlined';
        this.layoutService.config.menuMode = 'static';
        this.layoutService.config.colorScheme = 'light';
        this.layoutService.config.scale = 14;

        this.usuarioService.identity();
    }
}
