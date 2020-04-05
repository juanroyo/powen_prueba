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

   public chart: any = null;

   public list(){
     var array: []
     var chartUpdate = this.chart.data;
     console.log(chartUpdate)
     chartUpdate.map(function(item, index) {
       return array = item.data;
     })

     console.log(array)
     console.log(event.target.value)
     //console.log(event.target.attribute)
     array.push(event.target.value)
     array.sort()
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
      this.chart = new Chart('realtime', {
  			type: 'line',
  			data: {
  				labels: [],
  				datasets: [
  				  {
  					label: 'Data',
  					fill: false,
  					data: [],
  					backgroundColor: '#168ede',
  					borderColor: '#168ede'
  				  }
  				]
  			  },
  			  options: {
  				tooltips: {
  					enabled: false
  				},
  				legend: {
  					display: true,
  					position: 'bottom',
  					labels: {
  						fontColor: 'white'
  					}
  				},
  				scales: {
  				  yAxes: [{
  					  ticks: {
  						  fontColor: "white"
  					  }
  				  }],
  				  xAxes: [{
  					ticks: {
  						fontColor: "white",
  						beginAtZero: true
  					}
  				  }]
  				}
  			  }
  		});
  }

}