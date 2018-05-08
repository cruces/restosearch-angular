import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {RestaurantComponent} from './restaurant/restaurant.component';

import {HttpModule} from '@angular/http';
import {RestaurantService} from './core/services/restaurant.service';
import {CategoryComponent} from './category/category.component';
import {CategoryService} from './core/services/category.service';
import {FooterComponent, HeaderComponent, SharedModule} from './shared';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {HomeComponent} from './home/home.component';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';


@NgModule({
    declarations: [
        AppComponent,
        RestaurantComponent,
        CategoryComponent,
        FooterComponent,
        HeaderComponent,
        RestaurantsComponent,
        HomeComponent
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
