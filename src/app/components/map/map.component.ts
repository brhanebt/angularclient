import { Component, OnInit } from '@angular/core';
import {d3} from 'd3';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public name: string = 'd3';

  // constructor(private userService: UserService) {
  // }

  public ngOnInit(): void {


    let width = 900;
    let height = 600;

    let projection = d3.geoMercator();

    let svg = d3.select('body').append('svg')
      .attr('width', width)
      .attr('height', height);
    let path = d3.geoPath()
      .projection(projection);
    let g = svg.append('g');
    g.attr('class', 'map');

    console.log("outside json calling1");


    d3.json("https://raw.githubusercontent.com/cszang/dendrobox/master/data/world-110m2.json")
      // d3.json("https://raw.githubusercontent.com/cszang/dendrobox/5199e47bf6c403a2e9f28bec3b764a2fe23ce359/data/maps.json")

      .then(function (topology) {
        // <---- Renamed it from data to topology
        console.log("------>", topology.feature);
        g.selectAll('path')
          .data(t.feature(topology, topology.objects.countries).features)
          //.data(t.feature(topology, topology.objects.countries)
          //  .geometries)
          .enter()
          .append('path')
          .attr('d', path);
        console.log("ending json calling1");

      });


    d3.json("https://raw.githubusercontent.com/cszang/dendrobox/5199e47bf6c403a2e9f28bec3b764a2fe23ce359/data/maps.json")
      // d3.json("https://raw.githubusercontent.com/cszang/dendrobox/5199e47bf6c403a2e9f28bec3b764a2fe23ce359/data/maps.json")

      .then(function (topology) {
        // <---- Renamed it from data to topology
        console.log("------>", topology.feature);
        g.selectAll('path')
          .data(t.feature(topology, topology.objects.ne_10m_airports).features)
          //.data(t.feature(topology, topology.objects.countries)
          //  .geometries)
          .enter()
          .append('path')
          .attr('d', path)
          .attr('class', 'airport');
        console.log("ending json calling1");

      });






  }

}
