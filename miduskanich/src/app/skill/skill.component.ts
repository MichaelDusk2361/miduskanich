import { Component, Input } from '@angular/core';

@Component({
  selector: 'mid-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input() name = "SkillName";
  @Input() percent = "70";
}
