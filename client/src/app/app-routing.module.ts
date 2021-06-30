import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MatchesComponent } from './matches/matches.component';
import { MessagesComponent } from './messages/messages.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
 
  {path:"",component:HomeComponent},
  {path:"matches",component:MatchesComponent},
  {path:"lists",component:ListsComponent},
  {path:"messages",component:MessagesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
