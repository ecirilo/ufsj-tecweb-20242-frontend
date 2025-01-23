import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";
import {LoginComponent} from "./pages/login/login.component";
import {AuthGuard} from "./auth/auth.guard";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            {
                path: '',
                component: AppLayoutComponent,
                canActivate: [AuthGuard],
                children: [
                    { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'palestras', loadChildren: () => import('./pages/palestras/palestra.module').then(m => m.PalestraModule) },
                    { path: 'alunos', loadChildren: () => import('./pages/alunos/aluno.module').then(m => m.AlunoModule) },
                    { path: 'calendar', loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule) },
                    { path: 'perfil', loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilModule) },
                ]
            },
            { path: '**', redirectTo: 'login' },
        ], {
            onSameUrlNavigation: 'reload',
            useHash: false
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
