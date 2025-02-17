import {TAluno} from "./aluno.model";
import {TPalestra} from "./palestra.model";

export type TPresenca = {
    id?: number | null;
    aluno: TAluno;
    palestra: TPalestra;
}
