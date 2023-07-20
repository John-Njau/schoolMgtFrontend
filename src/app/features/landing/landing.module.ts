import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingHeroComponent } from './components/landing-hero/landing-hero.component';
import { LandingRoutingModule } from './landing-routing.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    LandingHeroComponent
  ],
  imports: [
    CommonModule, LandingRoutingModule
  ]
})
export class LandingModule { }
