import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/classes/region';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  public componentTitle = 'Ethiopian regions covid-19 distribution tabular view';

  regions: Region[];

  constructor(private regionService: RegionService) {
  }

  ngOnInit() {
    this.regionService.findAll().subscribe(data => {
      this.regions = data;
    });
  }

}
