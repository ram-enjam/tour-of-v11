import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { V11HeroesComponent } from './v11-heroes/v11-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    V11HeroesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
