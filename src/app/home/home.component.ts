import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../core/services/restaurant.service';
import {RestaurantModel} from '../core/models/restaurant.model';
import {Subject} from 'rxjs/Subject';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private start = 0;
    private query = '';
    restaurantList = [];
    throttle = 300;
    scrollDistance = 1;
    scrollUpDistance = 2;
    restaurants: RestaurantModel[];
    searchTerm$ = new Subject<string>();

    constructor(private restaurantService: RestaurantService) {
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

    onScrollDown() {
        this.getRestaurants();
    }

}
