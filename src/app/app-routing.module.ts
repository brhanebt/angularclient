import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionsComponent } from './components/regions/regions.component';
import { RegionFormComponent } from './components/region-form/region-form.component';


const routes: Routes = [
  { path: 'regions', component: RegionsComponent },
  { path: 'addRegion', component: RegionFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
