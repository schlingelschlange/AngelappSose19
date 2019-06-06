import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KameraViewPage } from './kamera-view.page';

describe('KameraViewPage', () => {
  let component: KameraViewPage;
  let fixture: ComponentFixture<KameraViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KameraViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KameraViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
