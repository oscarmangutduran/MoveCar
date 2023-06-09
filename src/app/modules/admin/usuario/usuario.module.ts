import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UsuarioComponent } from 'app/modules/admin/usuario/usuario.component';
import { FormsModule } from '@angular/forms';
//import { HeroIconsModule } from 'heroicons/angular';

const UsuarioRoutes: Route[] = [
    {
        path     : '',
        component: UsuarioComponent
    }
];

@NgModule({
    declarations: [
        UsuarioComponent
    ],
    imports     : [
        RouterModule.forChild(UsuarioRoutes),
        CommonModule,
        FormsModule,
        //HeroIconsModule,
    ]
})
export class UsuarioModule
{
}
