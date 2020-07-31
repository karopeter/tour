import { RouterModule, Routes } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { TourComponent } from './tour/tour.component';
import { FeaturesComponent } from './features/features.component';


export const APP_ROUTES: Routes = [
   { path: '', redirectTo: '/tour', pathMatch: 'full'},
   {path: 'tour', component: TourComponent},
   {path: 'features', component: FeaturesComponent},
   { path: 'popup', component: PopupComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
