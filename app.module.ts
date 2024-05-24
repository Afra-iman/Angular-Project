import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SymposiumComponent } from './symposium/symposium.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { WebinarComponent } from './webinar/webinar.component';
import { CulturalsComponent } from './culturals/culturals.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InterviewsComponent,
    AboutUsComponent,
    SymposiumComponent,
    WorkshopComponent,
    WebinarComponent,
    CulturalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
