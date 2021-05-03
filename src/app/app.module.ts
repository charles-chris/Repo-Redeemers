import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';      
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { EventsComponent } from './component/events/events.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { PrayerRequestComponent } from './component/prayer-request/prayer-request.component';
import { ServiceComponent } from './component/service/service.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { UpcomingEventComponent } from './component/upcoming-event/upcoming-event.component';
import { MatButtonModule, 
         MatIconModule, 
         MatCardModule, 
         MatFormFieldModule, 
         MatInputModule, 
         MatDatepickerModule, 
         MatNativeDateModule, 
         MatSlideToggleModule, 
         MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServiceComponent,
    EventsComponent,
    AboutusComponent,
    PrayerRequestComponent,
    NotfoundComponent,
    TestimonialsComponent,
    UpcomingEventComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,         
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,          
    MatSlideToggleModule,
    MatGridListModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
