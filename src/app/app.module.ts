import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Routes
import {AppRoutingModule} from './app-routing.module';
// Modules
import {InfiniteScrollModule} from 'angular2-infinite-scroll';
// Components
import {AppComponent} from './app.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {FooterComponent, HeaderComponent, SharedModule} from './shared';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {HomeComponent} from './home/home.component';
import {CategoryComponent} from './category/category.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {SearchRestaurantsComponent} from './search-restaurants/search-restaurants.component';
import {ProfileComponent} from './profile/profile.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {NotesComponent} from './notes/notes.component';
// Services
import {RestaurantService} from './core/services/restaurant.service';
import {CategoryService} from './core/services/category.service';
import {AuthService} from './core/services/auth.service';
import {AuthGuardService} from './core/services/auth-guard.service';
import {FavoriteService} from './core/services/favorite.service';
import { KeysPipe } from './core/pipes/keys.pipe';

@NgModule({
    declarations: [
        AppComponent,
        RestaurantComponent,
        FooterComponent,
        HeaderComponent,
        RestaurantsComponent,
        HomeComponent,
        CategoryComponent,
        SearchRestaurantsComponent,
        NotfoundComponent,
        ProfileComponent,
        FavoritesComponent,
        NotesComponent,
        KeysPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        SharedModule,
        InfiniteScrollModule,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent],
    providers: [
        RestaurantService,
        CategoryService,
        AuthService,
        AuthGuardService,
        FavoriteService
    ]
})
export class AppModule {
}
