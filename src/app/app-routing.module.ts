import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'palestras', loadChildren: () => import('./pages/palestras/palestra.module').then(m => m.PalestraModule) },
                    { path: 'alunos', loadChildren: () => import('./pages/alunos/aluno.module').then(m => m.AlunoModule) },
                    { path: 'calendar', loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule) },
                ]
            },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
