import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  route = 'recipe';

  setRoute(data) {
    console.log(this.route);
    console.log(data);
    this.route = data;
  }

}
