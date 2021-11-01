//#region ng
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//#endregion

//#region ionic
import {
  IonicModule,
  IonicRouteStrategy
} from '@ionic/angular';
//#endregion

//#region modules
import { AppRoutingModule } from './app-routing.module';
//#endregion

//#region components
import { AppComponent } from './app.component';
//#endregion

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [AppComponent],
  entryComponents: [],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
