import { Component } from '@angular/core';
import {TAluno} from "../../../../model/aluno.model";
import {AlunoService} from "../../../../service/aluno.service";
import {MessageService} from "primeng/api";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-aluno-update-dialog',
  templateUrl: './aluno-update.component.html',
})
export class AlunoUpdateComponent {

  aluno: TAluno = <TAluno>{};

  updateDialog: boolean = false;
  submitted: boolean = false;

  private closeSubject: Subject<void> = new Subject<void>();

  constructor(
      private alunoService: AlunoService,
      private messageService: MessageService
  ) { }

  open(id?: number | null): Observable<void> {
    if (id) {
      this.alunoService.get(id).subscribe((_aluno: TAluno): void => {
        this.aluno = _aluno;
      });
    }
    this.updateDialog = true;
    return this.closeSubject.asObservable();
  }

  onSave(): void {
    this.submitted = true;

    if (this.aluno.id) {
      this.alunoService.update(this.aluno as TAluno)
          .subscribe((_aluno: TAluno): void => {
            this.onClose();
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Aluno Atualizado', life: 3000 });
          });
    } else {
      this.alunoService.create(this.aluno as TAluno)
          .subscribe((_aluno: TAluno): void => {
            this.onClose();
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Aluno Criado', life: 3000 });
          });
    }
  }

  onClose(): void {
    this.aluno = <TAluno>{};
    this.updateDialog = false;
    this.closeSubject.next();
  }
}
