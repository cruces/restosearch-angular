import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {CategoriesModel} from '../models/categories.model';

@Injectable()
export class CategoryService {
    private mainUrl = 'https://developers.zomato.com/api/v2.1/';
    private userKey = '09a5ebbc6006fce8ebcf4fd3651c431c';
    private headers = {headers: new Headers({ 'user-key': this.userKey})};

  constructor(private http: Http) {}

    /** GET categories */
    getCategories(): Observable<CategoriesModel[]> {
        const url = `${this.mainUrl}categories`;
        return this.http.get(url, this.headers)
            .map((res: Response) => res.json()['categories'])
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}
