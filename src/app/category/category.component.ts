import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../core/services/category.service';
import {CategoriesModel} from '../core/models/categories.model';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
    categories: CategoriesModel[];

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.getCategories();
    }

    getCategories() {
        this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    }

}
