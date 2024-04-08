import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

//DEFINE ROUTE
const routes:Routes = [
  {path: 'login', component: LoginComponent},
  {path: '',redirectTo:'login', pathMatch: 'full'},
  {path: '',component:LayoutComponent,children:[{path:'dashboard',component:DashboardComponent}]},
  {path:'**',component:LoginComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
