import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {FavoriteModel} from '../models/favorite.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FavoriteService {
    fireUrl = 'https://restosearch-8d7ed.firebaseio.com/restaurants.json';

    constructor(private http: Http) {
    }

    /** Add new favorite restaurant */
    addFavorite(favorite: FavoriteModel) {
        let body = JSON.stringify(favorite);
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.fireUrl, body, {headers})
            .map((res: Response) => console.log(res.json()))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    /** get favorite restaurants */
    getFavorites(): Observable<FavoriteModel[]> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get(this.fireUrl, {headers})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
