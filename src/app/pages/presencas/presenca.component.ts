import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {DialogService} from "primeng/dynamicdialog";
import {TPresenca} from "../../model/presenca.model";
import {PresencaService} from "../../service/presenca.service";

@Component({
  templateUrl: './presenca.component.html',
  providers: [MessageService, DialogService]
})
export class PresencaComponent implements OnInit {

  presencas: TPresenca[] = [];

  cols: any[] = [];

  constructor(
    private presencaSevice: PresencaService,
  ) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'palestra', header: 'Palestra' },
      { field: 'nome', header: 'Aluno' },
      { field: 'matricula', header: 'Matrícula' },
    ];

    this.fetchData();
  }

  private fetchData(): void {
    this.presencaSevice.getAll().subscribe((body: TPresenca[]): void => {
      console.log(body);
      this.presencas = body;
    });
  }
}
