import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  componentTitle = '';

  constructor() {
    this.title = 'Ethiopia Covid-19 Tracking Application';
  }
}
