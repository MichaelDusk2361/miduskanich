import { Component } from '@angular/core';
import { faBook, faCrown, faTrophy } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'mid-iot-aquarium',
  templateUrl: './iot-aquarium.component.html',
  styleUrls: ['./iot-aquarium.component.scss'],
})
export class IotAquariumComponent {
  faCrown = faCrown;
  faTrophy = faTrophy;
  faBook = faBook;
}
