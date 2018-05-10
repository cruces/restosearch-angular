import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurant/:id', component: RestaurantComponent},
    {path: '404', component: NotfoundComponent},
    {path: '**', redirectTo: '/404'}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
