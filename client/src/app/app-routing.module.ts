import { TEFComponent } from './dashboard/integrador/TEF/tef.component';
import { POSComponent } from './dashboard/integrador/POS/pos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresaComponent } from './dashboard/empresa/empresa.component';
import { IntegradorComponent } from './dashboard/integrador/integrador.component';

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
            },
            {
                path: 'integrador',
                component: IntegradorComponent,
                data: {
                    title: 'Envio Integrador'
                },
                children: [
                    {
                        path: 'pos',
                        component: POSComponent
                    },
                    {
                        path: 'tef',
                        component: TEFComponent
                    }                    
                ]
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
