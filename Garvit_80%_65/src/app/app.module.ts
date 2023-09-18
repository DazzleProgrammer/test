import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainindexComponent } from './mainindex/mainindex.component';
import { MainbannerComponent } from './MainIndex/mainbanner/mainbanner.component';
import { MainaboutComponent } from './MainIndex/mainabout/mainabout.component';
import { MainfooterComponent } from './MainIndex/mainfooter/mainfooter.component';
import { MainchooseComponent } from './MainIndex/mainchoose/mainchoose.component';

@NgModule({
  declarations: [
    AppComponent,
    MainindexComponent,
    MainbannerComponent,
    MainaboutComponent,
    MainfooterComponent,
    MainchooseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
