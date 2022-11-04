import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotAquariumComponent } from './iot-aquarium.component';

describe('IotAquariumComponent', () => {
  let component: IotAquariumComponent;
  let fixture: ComponentFixture<IotAquariumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IotAquariumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IotAquariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
