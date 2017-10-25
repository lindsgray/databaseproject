import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroElementsComponent } from './hero-elements/hero-elements.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HeroElementsComponent,
    },
    {
    path: 'movie/:id',
    component: MovieDetailsComponent
    }
];

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule {}