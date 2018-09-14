import { EmpresaComponent } from './dashboard/empresa/empresa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard/empresa',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: '/dashboard/empresa',
                pathMatch: 'full'
            },
            {
                path: 'empresa',
                component: EmpresaComponent,
                data: {
                    title: 'Cadastro de Empresa'
                }
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
