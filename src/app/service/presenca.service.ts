import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TPalestra} from "../model/palestra.model";
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {map} from "rxjs/operators";
import * as dayjs from "dayjs";
import {TPresenca} from "../model/presenca.model";

@Injectable({
    providedIn: 'root'
})
export class PresencaService {

    constructor(private http: HttpClient) {}

    getAll(): Observable<TPresenca[]> {
        return this.http.get<TPresenca[]>('/api/presencas');
    }

    countByPalestra(id: number): Observable<number> {
        return this.http.head<void>(`/api/presencas/palestras/${id}/`,
          {observe: 'response'}
        ).pipe(map((_response: HttpResponse<void>): number =>
          Number(_response.headers.get('X-Presenca-Count')))
        );
    }

    create(presenca: TPresenca): Observable<TPresenca> {
        return this.http.post<TPresenca>(
            '/api/presencas',
          presenca
        );
    }
}
