import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {TPalestra} from "../../model/palestra.model";
import {PalestraService} from "../../service/palestra.service";
import {TAluno} from "../../model/aluno.model";
import {AlunoService} from "../../service/aluno.service";

@Component({
    templateUrl: './aluno.component.html',
    providers: [MessageService]
})
export class AlunoComponent implements OnInit {

    updateDialog: boolean = false;

    deleteDialog: boolean = false;

    alunos: TAluno[] = [];

    aluno: Partial<TAluno> = {};

    submitted: boolean = false;

    cols: any[] = [];

    constructor(
        private alunoService: AlunoService,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.alunoService.getAll().subscribe((body: TAluno[]): void => {
            this.alunos = body;
        });

        this.cols = [
            { field: 'id', header: 'id' },
            { field: 'matricula', header: 'Matricula' },
            { field: 'nome', header: 'Nome' },
        ];
    }

    onOpenNew(): void {
        this.aluno = {};
        this.submitted = false;
        this.updateDialog = true;
    }

    onEdit(aluno: TAluno): void {
        this.aluno = aluno;
        this.updateDialog = true;
    }

    onDelete(palestra: TPalestra): void {
        this.deleteDialog = true;
        this.aluno = palestra;
    }

    onConfirmDelete() {
        this.deleteDialog = false;
        this.alunoService.delete(this.aluno.id as number)
            .subscribe((): void => {
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Aluno Removido', life: 3000 });
                this.aluno = {};
            });
    }

    onHideDialog(): void {
        this.updateDialog = false;
        this.submitted = false;
    }

    onSave(): void {
        this.submitted = true;

        if (this.aluno.id) {
            this.alunoService.update(this.aluno as TAluno)
                .subscribe((_aluno: TAluno): void => {
                    this.aluno = {};
                    this.updateDialog = false;
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Aluno Atualizado', life: 3000 });
                });
        } else {
            this.alunoService.create(this.aluno as TAluno)
                .subscribe((_aluno: TAluno): void => {
                    this.aluno = {};
                    this.updateDialog = false;
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Aluno Criado', life: 3000 });
                });
        }
    }
}
