import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ourWork', component: OurWorkComponent },
  // { path: 'references', component: ReferencesComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurWorkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
