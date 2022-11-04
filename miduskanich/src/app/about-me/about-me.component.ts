import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCompass } from '@fortawesome/free-regular-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'mid-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  faMail = faEnvelope;
  faLocation = faCompass;
  faTel = faMobileScreen;
}
