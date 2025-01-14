import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunoComponent } from './aluno.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AlunoComponent }
	])],
	exports: [RouterModule]
})
export class AlunoRoutingModule { }
