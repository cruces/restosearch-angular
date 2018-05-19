import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CategoryComponent} from '../category/category.component';
import {HeaderComponent} from '../shared';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HomeComponent,
        CategoryComponent,
        HeaderComponent
    ]
})
export class HomeModule {
}
