/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By, BrowserModule} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotFoundComponent } from './not-found.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonModule} from '@angular/common';
import {HttpModule, JsonpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducer} from '../reducers/index';
import {AppComponent} from '../app.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {IndexComponent} from '../index/index.component';
import {ResultsComponent} from '../results/results.component';
import {AdvancedsearchComponent} from '../advancedsearch/advancedsearch.component';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        IndexComponent,
        ResultsComponent,
        NotFoundComponent,
        AdvancedsearchComponent,
        SearchBarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('it should have logo with correct alt text property', () => {
    let compiled = fixture.debugElement.nativeElement;
    let image: HTMLInputElement = compiled.querySelector('div.not-found-banner img');
    expect(image).toBeTruthy();
    expect(image.alt).toBe('YaCy');
  });

  it('should have an app-search-bar element', () => {
    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('app-search-bar')).toBeTruthy();
  });

});
