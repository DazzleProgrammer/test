import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './exterior/nav/nav.component';
import { HeroComponent } from './exterior/hero/hero.component';
import { IntroComponent } from './exterior/intro/intro.component';
import { ServiceComponent } from './exterior/service/service.component';
import { FooterComponent } from './exterior/footer/footer.component';
import { ClientComponent } from './exterior/client/client.component';
import { BudgetComponent } from './exterior/budget/budget.component';
import { HighlightComponent } from './exterior/highlight/highlight.component';
import { NewComponent } from './new/new.component';
import { NavbarComponent } from './test/navbar/navbar.component';
import { HeroSectionComponent } from './test/hero-section/hero-section.component';
import { FootersComponent } from './test/footers/footers.component';
import { ChooseComponent } from './test/choose/choose.component';
import { MoreComponent } from './test/more/more.component';
import { CateComponent } from './test/cate/cate.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    BlogComponent,
    CalculatorComponent,
    NavComponent,
    HeroComponent,
    IntroComponent,
    ServiceComponent,
    FooterComponent,
    ClientComponent,
    BudgetComponent,
    HighlightComponent,
    NewComponent,
    NavbarComponent,
    HeroSectionComponent,
    FootersComponent,
    ChooseComponent,
    MoreComponent,
    CateComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
