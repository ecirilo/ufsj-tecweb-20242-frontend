import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TPalestra} from "../model/palestra.model";
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {map} from "rxjs/operators";
import * as dayjs from "dayjs";

@Injectable({
    providedIn: 'root'
})
export class PalestraService {

    constructor(private http: HttpClient) {}

    getAll(): Observable<TPalestra[]> {
        return this.http.get<TPalestra[]>('/api/palestras');
    }

    get(id: number): Observable<TPalestra> {
        return this.http.get<TPalestra>(`/api/palestras/${id}`)
            .pipe(map(this.parseDate));
    }

    create(palestra: TPalestra): Observable<TPalestra> {
        return this.http.post<TPalestra>(
            '/api/palestras',
            palestra
        );
    }

    update(palestra: TPalestra): Observable<TPalestra> {
        return this.http.put<TPalestra>(
            `/api/palestras/${palestra.id}`,
            palestra
        );
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`/api/palestras/${id}`);
    }

    private parseDate(palestra: TPalestra): TPalestra {
        return {
            ...palestra,
            dataHora: dayjs(palestra.dataHora).toDate(),
        }
    }
}
