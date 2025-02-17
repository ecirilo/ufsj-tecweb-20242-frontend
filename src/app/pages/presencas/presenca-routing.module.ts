import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PresencaComponent } from './presenca.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PresencaComponent }
	])],
	exports: [RouterModule]
})
export class PresencaRoutingModule { }
