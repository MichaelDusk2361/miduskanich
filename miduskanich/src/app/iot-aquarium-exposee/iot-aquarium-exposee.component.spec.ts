import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotAquariumExposeeComponent } from './iot-aquarium-exposee.component';

describe('IotAquariumExposeeComponent', () => {
  let component: IotAquariumExposeeComponent;
  let fixture: ComponentFixture<IotAquariumExposeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IotAquariumExposeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IotAquariumExposeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
