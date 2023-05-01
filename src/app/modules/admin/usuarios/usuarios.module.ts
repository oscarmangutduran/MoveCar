import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UsuariosComponent } from 'app/modules/admin/usuarios/usuarios.component';
import {FormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

const UsuariosRoutes: Route[] = [
    {
        path     : '',
        component: UsuariosComponent
    }
];

@NgModule({
    declarations: [
        UsuariosComponent
    ],
    imports     : [
        RouterModule.forChild(UsuariosRoutes),
        CommonModule,
        FormsModule,
        MatIconModule,
    ]
})
export class UsuariosModule
{
}

