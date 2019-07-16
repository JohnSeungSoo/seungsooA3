import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeungsooComponent } from './seungsoo.component';

describe('SeungsooComponent', () => {
  let component: SeungsooComponent;
  let fixture: ComponentFixture<SeungsooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeungsooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeungsooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
