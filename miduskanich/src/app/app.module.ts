import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EducationComponent } from './education/education.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectsComponent } from './projects/projects.component';
import { InterestsComponent } from './interests/interests.component';
import { ASiaComponent } from './a-sia/a-sia.component';
import { IotAquariumComponent } from './iot-aquarium/iot-aquarium.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { IotAquariumExposeeComponent } from './iot-aquarium-exposee/iot-aquarium-exposee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    HeaderComponent,
    EducationComponent,
    AboutMeComponent,
    SkillsComponent,
    SkillComponent,
    ProjectsComponent,
    InterestsComponent,
    ASiaComponent,
    IotAquariumComponent,
    CurriculumVitaeComponent,
    IotAquariumExposeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
