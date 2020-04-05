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
     {data: [ ], label: "cosa"},

   ];

   public list() {
     var array: []
     var chartUpdate = this.barChartData;
     chartUpdate.map(function(item, index) {
       return array = item.data;
     })
     array.push(event.target.value)
     array.sort(function(a, b){return a-b});
     console.log(array)
     array.reverse()
     console.log(array)
     console.log(event.target.value)
     //console.log(event.target.attribute)

     //chartUpdate.push(event.target.value)
   }
constructor(private apollo: Apollo) {}


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
          console.log(loading)
          this.starships = data && data.allStarships;
          console.log(this.starships)
          this.loading = loading;
        }
      );
  }

}
