import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageService} from 'primeng/api';
import {TPalestra} from "../../model/palestra.model";
import {PalestraService} from "../../service/palestra.service";
import {TAluno} from "../../model/aluno.model";
import {AlunoService} from "../../service/aluno.service";
import {AlunoUpdateComponent} from "./components/aluno-update/aluno-update.component";

@Component({
    templateUrl: './aluno.component.html',
    providers: [MessageService]
})
export class AlunoComponent implements OnInit {

    @ViewChild('alunoUpdateDialog')
    alunoUpdateDialog!: AlunoUpdateComponent;

    deleteDialog: boolean = false;

    alunos: TAluno[] = [];

    aluno: Partial<TAluno> = {};

    cols: any[] = [];

    constructor(
        private alunoService: AlunoService,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.cols = [
            { field: 'id', header: 'id' },
            { field: 'matricula', header: 'Matricula' },
            { field: 'nome', header: 'Nome' },
        ];

        this.fetchData();
    }

    onOpenNew(): void {
        this.alunoUpdateDialog.open().subscribe((): void => {
          this.fetchData();
        });
    }

    onEdit(aluno: TAluno): void {
        this.alunoUpdateDialog.open(aluno.id).subscribe((): void => {
            this.fetchData();
        });
    }

    onDelete(aluno: TAluno): void {
        this.deleteDialog = true;
        this.aluno = aluno;
    }

    onConfirmDelete() {
        this.deleteDialog = false;
        this.alunoService.delete(this.aluno.id as number)
            .subscribe((): void => {
                this.aluno = {};
                this.fetchData();
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Aluno Removido', life: 3000 });
            });
    }

    private fetchData(): void {
        this.alunoService.getAll().subscribe((body: TAluno[]): void => {
            this.alunos = body;
        });
    }
}
