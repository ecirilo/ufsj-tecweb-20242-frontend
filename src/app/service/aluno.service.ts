import {HttpClient} from '@angular/common/http';
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
        return of([]);
    }

    create(aluno: TAluno): Observable<TAluno> {
        return of();
    }

    update(aluno: TAluno): Observable<TAluno> {
        return of();
    }

    delete(id: number): Observable<void> {
        return of(undefined);
    }
}
