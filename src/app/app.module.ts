import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { GraphQLModule } from './graphql.module';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule, HttpClientModule,
    ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
