import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { RegistrationPage } from './registration.page';
import { Location } from "@angular/common";

import {
  routes
} from "../../app-routing.module";
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('RegistrationPage', () => {
  let component: RegistrationPage;
  let fixture: ComponentFixture<RegistrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ RegistrationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 

  it('should test login', fakeAsync(() =>{

    let location: Location;
    let router: Router;

    router = TestBed.get(Router); 
    location = TestBed.get(Location); 
  
    fixture = TestBed.createComponent(RegistrationPage); 
    router.initialNavigation();

    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/home");
    });
  }));
});
