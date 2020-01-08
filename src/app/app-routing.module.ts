import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColourComponent } from './colour/colour.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
{path: 'home',component:HomeComponent},
{path:'colors',component:ColourComponent},
{path:'user',component:UserComponent},
{path:'countries',component:CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
