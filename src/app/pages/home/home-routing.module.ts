//#region ng
import { NgModule } from '@angular/core';
//#endregion

//#region modules
import {
  Routes,
  RouterModule
} from '@angular/router';
//#endregion

//#region components
import { HomePage } from './home.page';
//#endregion

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
