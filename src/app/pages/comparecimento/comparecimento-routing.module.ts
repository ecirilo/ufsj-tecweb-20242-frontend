import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComparecimentoComponent } from './comparecimento.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ComparecimentoComponent }
	])],
	exports: [RouterModule]
})
export class ComparecimentoRoutingModule { }
