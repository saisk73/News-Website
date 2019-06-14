import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { HeadlineDetailsComponent } from './headline-details/headline-details.component';
import {HttpClientModule} from'@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    HeadlineDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
