import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';


// const ROUTES = ;
@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: 'welcome', component: WelcomeComponent},
      {path: '**', component: PageNotFoundComponent}
      ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
