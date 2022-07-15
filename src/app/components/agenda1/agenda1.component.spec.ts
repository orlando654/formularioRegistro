import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agenda1Component } from './agenda1.component';

describe('Agenda1Component', () => {
  let component: Agenda1Component;
  let fixture: ComponentFixture<Agenda1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Agenda1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agenda1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
