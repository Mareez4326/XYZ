import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './XYZ/about-page/about-page.component';
import { GalleryPageComponent } from './XYZ/gallery-page/gallery-page.component';
import { HeaderPageComponent } from './XYZ/header-page/header-page.component';
import { HomePageComponent } from './XYZ/home-page/home-page.component';

const routes: Routes = [
  { path: "XYZ", component: HeaderPageComponent },
  { path: "", redirectTo: "XYZ", pathMatch: "full" },
  { path: "Home", component: HomePageComponent },
  { path: "Gallery", component: GalleryPageComponent },
  { path: "About", component: AboutPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
