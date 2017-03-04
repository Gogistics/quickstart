import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// D3
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

// D3
import { HomeComponent } from './home/home.component';
import { BarchartComponent } from './shared/barchart/barchart.component';
import { routing, appRoutingProviders } from './app.routes';


@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    BarchartComponent
  ],
  providers: [appRoutingProviders],
  bootstrap:    [AppComponent]
})
export class AppModule { }
