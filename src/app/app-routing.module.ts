import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { PrayerRequestComponent } from './component/prayer-request/prayer-request.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prayer', component: PrayerRequestComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
