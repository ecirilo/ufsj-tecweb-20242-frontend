import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {TPalestra} from "../../model/palestra.model";
import {PalestraService} from "../../service/palestra.service";
import {PresencaService} from "../../service/presenca.service";
import {AlunoService} from "../../service/aluno.service";
import {firstValueFrom} from "rxjs";

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  readonly Array = Array;

  palestras!: TPalestra[];
  numAlunos: WritableSignal<number> = signal<number>(0);
  totalPresencas: WritableSignal<number> = signal<number>(0);
  presencasByPalestra: WritableSignal<Map<number, number>> = signal<Map<number, number>>(new Map());

  constructor(
    private readonly alunoService: AlunoService,
    private readonly palestraService: PalestraService,
    private readonly presencaService: PresencaService
  ) { }

  ngOnInit(): void {
    this.palestraService.getAll().subscribe((_palestras: TPalestra[]): void => {
      this.palestras = _palestras;
      this.updatePresencas();
    });

    this.alunoService.count().subscribe((count: number): void => {
      this.numAlunos.set(count);
    });
  }

  async updatePresencas(): Promise<void> {
    let totalPresencas: number = 0;
    const presencaMap = new Map<number, number>();
    for (const palestra of this.palestras) {
      const numAlunosByPalestra: number = await firstValueFrom(this.presencaService.countByPalestra(palestra.id));
      totalPresencas += numAlunosByPalestra;
      presencaMap.set(palestra.id, ((numAlunosByPalestra * 100 / this.numAlunos()) ));
    }
    this.presencasByPalestra.set(presencaMap);
    this.totalPresencas.set(totalPresencas);
  }
}
