import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { SquarePageComponent } from './components/square-page/square-page.component';

import { FlowComponent } from './components/flow/flow.component';
import { GlobalDataService } from './services/global-data.service';
import { DrawFieldComponent } from './components/draw-field/draw-field.component';
import { Http, HttpModule } from '@angular/http';
import { GenderComponent } from './components/gender/gender.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { ItemListComponent } from './components/add-list/item-list/item-list.component';
import { SuperButtonComponent } from './components/super-button/super-button.component';
import { ReactFormComponent } from './components/react-form/react-form.component';
import { UsersService } from './services/users.service';
import { MycolorDirective } from './directives/mycolor.directive';
import { RuryComponent } from './components/rury/rury.component';
import { RuraPipe } from './pipes/rura.pipe'
import { HardwareService } from './services/hardware.service';
import { Hard2Component } from './components/hard2/hard2.component';
import { Hard2Service } from './services/hard2.service';
import { ServerService } from './services/server.service';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { LocalComponent } from './components/local/local.component';
import {LocalService} from './services/local.service';
import { SiemensComponent } from './components/siemens/siemens.component';




const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'myForm', component: MyFormComponent },
  { path: 'squarePage', component: SquarePageComponent },
  { path: 'flow', component: FlowComponent },
  { path: 'draw', component: DrawFieldComponent },
  { path: 'gender', component: GenderComponent },
  { path: 'lista', component: AddListComponent },
  { path: 'reactForm', component: ReactFormComponent },
  { path: 'rura', component: RuryComponent },
  { path: 'hard2', component: Hard2Component },
  {path:'wymiana',component: ExchangeComponent},
  {path:'local', component: LocalComponent},
  {path:'siemens', component:SiemensComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MyFormComponent,
    SquarePageComponent,
    FlowComponent,
    DrawFieldComponent,
    GenderComponent,
    AddListComponent,
    ItemListComponent,
    SuperButtonComponent,
    ReactFormComponent,
    MycolorDirective,
    RuryComponent,
    RuraPipe,
    Hard2Component,
    ExchangeComponent,
    LocalComponent,
    SiemensComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [GlobalDataService,
    UsersService,
    HardwareService,
    Hard2Service,
    ServerService,
    LocalService],
    
    bootstrap: [AppComponent]
})
export class AppModule {

}
