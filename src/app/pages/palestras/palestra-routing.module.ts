import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PalestraComponent } from './palestra.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PalestraComponent }
	])],
	exports: [RouterModule]
})
export class PalestraRoutingModule { }
