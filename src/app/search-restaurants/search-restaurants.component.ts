import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {RestaurantModel} from '../core/models/restaurant.model';
import {RestaurantService} from '../core/services/restaurant.service';
import {ActivatedRoute} from '@angular/router';
import {FavoriteModel} from '../core/models/favorite.model';
import {FavoriteService} from '../core/services/favorite.service';

@Component({
    selector: 'app-search-restaurants',
    templateUrl: './search-restaurants.component.html',
    styleUrls: ['./search-restaurants.component.scss']
})
export class SearchRestaurantsComponent implements OnInit {
    private start = 0;
    private query = '';
    restaurantList = [];
    throttle = 300;
    scrollDistance = 1;
    scrollUpDistance = 2;
    restaurants: RestaurantModel[];
    searchTerm$ = new Subject<string>();
    // restaurantFavorite: FavoriteModel = {
    //     id: '',
    //     name: '',
    //     cuisines: '',
    //     location: '',
    //     rating: '',
    //     phoneNumber: '',
    // };

    constructor(private restaurantService: RestaurantService,
                private favoriteService: FavoriteService,
                private route: ActivatedRoute) {
        this.restaurantService.searchRestaurant(this.searchTerm$, this.start)
            .subscribe(results => {
                this.restaurantList = [];
                this.restaurants = results;
                this.restaurantList.push.apply(this.restaurantList, results);
                this.start += results.length;
            });
    }

    ngOnInit() {
        this.getRestaurants();
    }

    getRestaurants() {
        this.searchTerm$.subscribe(value => this.query = value);
        this.restaurantService.getRestautants(this.start, this.query).subscribe(restaurants => {
            this.restaurants = restaurants;
            this.restaurantList.push.apply(this.restaurantList, restaurants);
            this.start += restaurants.length;
        });
    }

    addToFavorites(restaurant: RestaurantModel) {
        console.log(restaurant);
        let restaurantFavorite: FavoriteModel = {
            id: restaurant.id,
            name: restaurant.name,
            cuisines: restaurant.cuisines,
            location: `${restaurant.location.locality}, ${restaurant.location.city}`,
            rating: restaurant.user_rating.aggregate_rating,
            phoneNumber: restaurant.phone_numbers,
        };

        this.favoriteService.addFavorite(restaurantFavorite)
            .subscribe(data => {});
    }

    onScrollDown() {
        this.getRestaurants();
    }

}
