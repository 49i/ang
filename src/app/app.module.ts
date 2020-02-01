import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import * as containers from './plan/containers';
import * as presentations from './plan/presentations';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ...containers.declarations,
    ...presentations.declarations,
    TimePipe,
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
