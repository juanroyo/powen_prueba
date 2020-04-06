import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { ChartsModule } from 'ng2-charts';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  starships: any[];
  loading = true;
  title = 'Tour of Heroes';
  public barChartOptions = {
     scaleShowVerticalLines: false,
     responsive: true
   };

   public barChartLabels = ['crew', 'costInCredits', 'cargoCapacity', 'hyperdriveRating', 'length', 'maxAtmospheringSpeed', 'passengers'];
   public barChartType = 'horizontalBar';
   public barChartLegend = true;

   public barChartData = [
     {data: [ ], label: "Points"},

   ];

   list() {
     const element = event.currentTarget as HTMLInputElement
     //const value = element.value
     var array: any[]
     var chartUpdate = this.barChartData;
     chartUpdate.map(function(item, index) {
       return array = item.data;
     })
     array.push(element.value)
     array.sort(function(a, b){return a-b});
     array.reverse()
     array.slice(0,6)
     console.log(element.value)
   }
constructor(private apollo: Apollo) {
  this.starships = [];
}


  ngOnInit() {
    this.apollo
      .query<any>({
        query: gql`
          query { allStarships {
            name
            crew
            costInCredits
            cargoCapacity
            hyperdriveRating
            length
            maxAtmospheringSpeed
            passengers } }
        `
      })
      .subscribe(
        ({ data, loading }) => {
          this.starships = data && data.allStarships;
          this.loading = loading;
        }
      );
  }

}
