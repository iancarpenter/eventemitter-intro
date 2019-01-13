import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonPressed: string;

  whichButtonPressed() {
    // console.log('The button pressed is ' + (<HTMLButtonElement>event.currentTarget).innerText);

    this.buttonPressed =  (<HTMLButtonElement>event.currentTarget).innerText;

  }

}
