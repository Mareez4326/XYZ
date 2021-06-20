import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HeaderPageComponent } from './XYZ/header-page/header-page.component';
import { HomePageComponent } from './XYZ/home-page/home-page.component';
import { AboutPageComponent } from './XYZ/about-page/about-page.component';
import { GalleryPageComponent } from './XYZ/gallery-page/gallery-page.component';
import { LoginPageComponent } from './XYZ/login-page/login-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    HomePageComponent,
    AboutPageComponent,
    GalleryPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [LoginPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
