import { LojaComponent } from './dashboard/loja/loja.component';
import { Title } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';
import { IntegradorComponent } from './dashboard/integrador/integrador.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: '/dashboard/loja',
                pathMatch: 'full'
            },
            {
                path: 'loja',
                component: LojaComponent,
                data: {
                    title: 'Cadastro de lojas'
                }
            },
                {
                    path: 'integrador',
                    component: IntegradorComponent,
                    data: {
                        title: 'Ações Integrador'
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
export class AppRoutingModule {

}