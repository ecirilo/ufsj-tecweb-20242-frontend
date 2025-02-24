import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AlunoRoutingModule} from './aluno-routing.module';
import {AlunoComponent} from './aluno.component';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {DialogModule} from 'primeng/dialog';
import {SharedModule} from "../../shared/shared.module";
import {AlunoUpdateComponent} from "./components/aluno-update/aluno-update.component";

@NgModule({
    imports: [
      SharedModule,
      AlunoRoutingModule,
    ],
    declarations: [AlunoComponent, AlunoUpdateComponent]
})
export class AlunoModule { }
