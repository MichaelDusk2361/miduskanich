import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASiaComponent } from './a-sia/a-sia.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { IotAquariumExposeeComponent } from './iot-aquarium-exposee/iot-aquarium-exposee.component';
import { IotAquariumComponent } from './iot-aquarium/iot-aquarium.component';

const routes: Routes = [
  {
    path: 'projects',
    children: [
      {
        path: 'a-sia',
        component: ASiaComponent,
      },
      {
        path: 'iot-aquarium',
        component: IotAquariumComponent,
      },
      {
        path: 'iot-aquarium/exposee',
        component: IotAquariumExposeeComponent,
      }
    ],
  },
  { path: '**', component: CurriculumVitaeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
