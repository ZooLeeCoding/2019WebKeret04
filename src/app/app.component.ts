import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Webfejl04';
  firstOutput: any;

  handleOutput(event) {
    console.log("megkaptam az outputot", event);
    this.firstOutput = event;
  }
}
