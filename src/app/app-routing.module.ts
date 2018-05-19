import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {SearchRestaurantsComponent} from './search-restaurants/search-restaurants.component';
import {ProfileComponent} from './profile/profile.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {NotesComponent} from './notes/notes.component';

import {AuthGuardService} from './core/services/auth-guard.service';

const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'restaurant/:id', component: RestaurantComponent},
    {path: 'search', component: SearchRestaurantsComponent},
    {path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuardService]},
    {path: 'notes', component: NotesComponent, canActivate: [AuthGuardService]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
    {path: '404', component: NotfoundComponent},
    {path: '**', redirectTo: 'home'}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(ROUTES)]
})
export class AppRoutingModule {
}
