import {Component, OnInit} from '@angular/core';
import {FavoriteService} from '../core/services/favorite.service';
import {FavoriteModel} from '../core/models/favorite.model';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
    favorites: FavoriteModel[];

    constructor(private favoriteService: FavoriteService) {
    }

    ngOnInit() {
        this.getFavorites();
    }

    getFavorites() {
        this.favoriteService.getFavorites().subscribe(favorites => {
            this.favorites = favorites;
            console.log(this.favorites);
        });
    }

}
