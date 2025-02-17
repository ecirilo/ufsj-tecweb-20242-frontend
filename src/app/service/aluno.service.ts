import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TPalestra} from "../model/palestra.model";
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {map} from "rxjs/operators";
import * as dayjs from "dayjs";
import {TAluno} from "../model/aluno.model";

@Injectable({
    providedIn: 'root'
})
export class AlunoService {

    constructor(private http: HttpClient) {}

    getAll(): Observable<TAluno[]> {
        return this.http.get<TAluno[]>('/api/alunos');
    }

    get(id: number): Observable<TAluno> {
        return this.http.get<TAluno>(`/api/alunos/${id}`);
    }

    getByMatricula(matricula: string): Observable<TAluno> {
        return this.http.get<TAluno>(`/api/alunos/matriculas/${matricula}`);
    }

    count(): Observable<number> {
        return this.http.head<void>('/api/alunos',
          { observe: 'response'}
        ).pipe(map((_response: HttpResponse<void>): number => {
          console.log(_response);
          return Number(_response.headers.get('X-Total-Count'));
        }));
    }

    create(aluno: TAluno): Observable<TAluno> {
        return this.http.post<TAluno>(
            '/api/alunos',
            aluno
        );
    }

    update(aluno: TAluno): Observable<TAluno> {
        return this.http.put<TAluno>(
            `/api/alunos/${aluno.id}`,
            aluno
        );
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`/api/alunos/${id}`);
    }
}
