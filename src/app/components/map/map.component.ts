import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public componentTitle = 'Ethiopian regions covid-19 distribution map view';

  // constructor(private userService: UserService) {
  // }

  public ngOnInit(): void {


    const width = 900;
    const height = 800;

    const projection = d3.geoMercator().scale(2500).center([38,10]);//.scale(33350).translate([width / 2, height / 2]).center([8.9, 38.8]);

    const svg = d3.select('#map').append('svg')
      .attr('width', width)
      .attr('height', height);
    const path = d3.geoPath()
      .projection(projection);
    const g = svg.append('g');
    g.attr('class', 'map');


    d3.json('https://raw.githubusercontent.com/brhanebt/angularclient/master/src/assets/regionswgs84.geojson')
      // tslint:disable-next-line: only-arrow-functions
      .then(function(json) {
        g.selectAll('path')
          .data(json.features)
          .enter()
          .append('path')
          .attr('d', path);
      });


    // d3.json("https://raw.githubusercontent.com/cszang/dendrobox/5199e47bf6c403a2e9f28bec3b764a2fe23ce359/data/maps.json")
    //   // d3.json("https://raw.githubusercontent.com/cszang/dendrobox/5199e47bf6c403a2e9f28bec3b764a2fe23ce359/data/maps.json")

    //   .then(function (topology) {
    //     // <---- Renamed it from data to topology
    //     console.log("------>", topology.feature);
    //     g.selectAll('path')
    //       .data(t.feature(topology, topology.objects.ne_10m_airports).features)
    //       //.data(t.feature(topology, topology.objects.countries)
    //       //  .geometries)
    //       .enter()
    //       .append('path')
    //       .attr('d', path)
    //       .attr('class', 'airport');
    //     console.log("ending json calling1");

    //   });






  }

}
