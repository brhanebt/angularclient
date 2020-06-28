import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/classes/region';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-region-form',
  templateUrl: './region-form.component.html',
  styleUrls: ['./region-form.component.css']
})
export class RegionFormComponent {

  region: Region;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private regionService: RegionService) {
    this.region = new Region();
  }

  onSubmit() {
    this.regionService.save(this.region).subscribe(result => this.gotoRegionList());
  }

  gotoRegionList() {
    this.router.navigate(['/users']);
  }

}
