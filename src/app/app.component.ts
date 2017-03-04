import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeading = true;
  heroes = ['stillhead', 'stillfusion', 'stillconnect', 'stillcentral'];

  toggleHeading() {
    this.showHeading = !this.showHeading;
  }
}
