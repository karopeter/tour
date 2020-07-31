import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TourComponent } from './tour/tour.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TourComponent,
    FeaturesComponent,
    FooterComponent,
    NavigationComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/tour', pathMatch: 'full'},
      {path: 'tour', component: TourComponent},
      {path: 'features', component: FeaturesComponent},
      { path: 'popup', component: PopupComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
