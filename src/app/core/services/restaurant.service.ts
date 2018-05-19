import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {RestaurantModel} from '../models/restaurant.model';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class RestaurantService {
    private mainUrl = 'https://developers.zomato.com/api/v2.1/';
    private userKey = '09a5ebbc6006fce8ebcf4fd3651c431c';
    private headers = {headers: new Headers({'user-key': this.userKey})};
    private categoryId = 1;

    constructor(private http: Http) {
    }

    /** GET restaurant by id */
    getRestaurant(id: number): Observable<RestaurantModel> {
        const URL = `${this.mainUrl}restaurant?res_id=${id}`;
        return this.http.get(URL, this.headers)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    /** GET all restaurants */
    getRestautants(start: number, q: string): Observable<RestaurantModel[]> {
        const URL = `${this.mainUrl}search?q=${q}&start=${start}&count=10&category=${this.categoryId}`;
        return this.http.get(URL, this.headers)
            .map((res: Response) => res.json()['restaurants'])
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    /** GET all restaurants */
    getRestautantsSearch(start: number, q: string): Observable<RestaurantModel[]> {
        const URL = `${this.mainUrl}search?q=${q}&start=${start}&count=10&category=${this.categoryId}`;
        return this.http.get(URL, this.headers)
            .map((res: Response) => res.json()['restaurants'])
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    searchRestaurant(terms: Observable<string>, start: number) {
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.getRestautantsSearch(start, term));
    }
}
