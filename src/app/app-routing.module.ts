import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MyBarChartComponent } from "./my-bar-chart/my-bar-chart.component";
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "bar-chart", component: MyBarChartComponent },
  //{ path: '**', component: MyBarChartComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ChartsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
