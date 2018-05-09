import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {RestaurantComponent} from './restaurant/restaurant.component';

import {HttpModule} from '@angular/http';
import {RestaurantService} from './core/services/restaurant.service';
import {CategoryService} from './core/services/category.service';
import {FooterComponent, HeaderComponent, SharedModule} from './shared';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {HomeComponent} from './home/home.component';

import {InfiniteScrollModule} from 'angular2-infinite-scroll';
import {CategoryComponent} from './category/category.component';
import {NotfoundComponent} from './notfound/notfound.component';


@NgModule({
    declarations: [
        AppComponent,
        RestaurantComponent,
        FooterComponent,
        HeaderComponent,
        RestaurantsComponent,
        HomeComponent,
        CategoryComponent,
        NotfoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        SharedModule,
        InfiniteScrollModule
    ],
    bootstrap: [AppComponent],
    providers: [RestaurantService, CategoryService]
})
export class AppModule {
}
