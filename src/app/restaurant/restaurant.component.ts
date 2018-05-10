import {Component, OnInit, Input} from '@angular/core';
import {RestaurantService} from '../core/services/restaurant.service';
import {RestaurantModel} from '../core/models/restaurant.model';
import {ActivatedRoute, Params} from '@angular/router';

declare const google: any;

@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
    @Input() restaurant: RestaurantModel;
    private id: number;

    constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) {
    }

    ngOnInit() {
        this.getRestaurant();
    }

    getRestaurant() {
        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];
            this.restaurantService.getRestaurant(this.id)
                .subscribe(restaurant => {
                    this.restaurant = restaurant;
                    const location = {lat: Number(restaurant.location.latitude),
                        lng: Number(restaurant.location.longitude)};
                    const mapProp = {
                        center: new google.maps.LatLng(location),
                        zoom: 16,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    const map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
                    const marker = new google.maps.Marker({
                        position: location,
                        map: map
                    });
                });
        });
    }

}
