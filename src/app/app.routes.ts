import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroElementsComponent } from './hero-elements/hero-elements.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HeroElementsComponent,
    }
];

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule {}