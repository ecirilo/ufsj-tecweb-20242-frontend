import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppLayoutComponent} from "./layout/app.layout.component";
import {AuthGuard} from "./auth/auth.guard";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AppLayoutComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
          { path: 'palestras', loadChildren: () => import('./pages/palestras/palestra.module').then(m => m.PalestraModule) },
          { path: 'alunos', loadChildren: () => import('./pages/alunos/aluno.module').then(m => m.AlunoModule) },
          { path: 'presencas', loadChildren: () => import('./pages/presencas/presenca.module').then(m => m.PresencaModule) },
          { path: 'calendar', loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule) },
          { path: 'perfil', loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilModule) },
        ]},
      { path: 'presenca', loadChildren: () => import('./pages/comparecimento/comparecimento.module').then(m => m.ComparecimentoModule) },
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
