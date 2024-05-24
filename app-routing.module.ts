import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewsComponent } from './interviews/interviews.component';
import { HomeComponent } from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import { SymposiumComponent } from './symposium/symposium.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { CulturalsComponent } from './culturals/culturals.component';
import { WebinarComponent } from './webinar/webinar.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path:'interviews', component: InterviewsComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'symposium', component: SymposiumComponent},
  {path:'workshop', component: WorkshopComponent},
  {path:'webinar', component: WebinarComponent},
  {path:'culturals', component: CulturalsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
