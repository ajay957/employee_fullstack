import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const myRoute:Routes=[

]

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    NavBarComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
