import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CityChildComponent } from './city-child/city-child.component';
import { CityParentComponent } from './city-parent/city-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import {AppBootstrapModule} from './app-bootstrap.module';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { VoteComponent } from './vote/vote.component';
import { CountdownParentLvComponent } from './countdown-parent-lv/countdown-parent-lv.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { HeroComponent } from './hero/hero.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MyHighlightDirective } from './my-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CityChildComponent,
    CityParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    BootstrapModalComponent,
    VoteTakerComponent,
    VoteComponent,
    CountdownParentLvComponent,
    CountdownTimerComponent,
    HeroComponent,
    HeroDetailsComponent,
    MyHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'hero/:id', component: HeroComponent, children: [
        {path: 'details', component: HeroDetailsComponent}
      ]},
      {path: 'secret-page', redirectTo: '/hero/1', pathMatch: 'prefix'}
      // {path: '**', component: HeaderComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
