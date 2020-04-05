import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { GraphQLModule } from './graphql.module';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MyBarChartComponent],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule, HttpClientModule,
    ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
