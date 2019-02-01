import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SendComponent } from './dashboard/send/send.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard/send',
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
                path: 'send',
                component: SendComponent,
                data: {
                    title: 'Envio de REINF'
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
