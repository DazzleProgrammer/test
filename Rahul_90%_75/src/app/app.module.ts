import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { HeroComponentComponent } from './components/hero-component/hero-component.component';
import { BackgroundComponentComponent } from './components/background-component/background-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    HeroComponentComponent,
    BackgroundComponentComponent,
    FooterComponentComponent,
    AboutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
