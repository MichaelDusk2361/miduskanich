import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'mid-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {

  @HostBinding('class') elementClass = 'heading';

  @Input()
  public set variant(value: 'blue-strike' ) {
    this.elementClass = `heading heading--${value}`;
  }
}
