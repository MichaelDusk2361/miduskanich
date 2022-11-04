import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASiaComponent } from './a-sia.component';

describe('ASiaComponent', () => {
  let component: ASiaComponent;
  let fixture: ComponentFixture<ASiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
