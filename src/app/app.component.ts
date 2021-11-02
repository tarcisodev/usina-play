//#region ng
import { Component } from '@angular/core';
import { setIon4Theme } from './libs';
//#endregion

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  //#region publics
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
  ];
  //#endregion

  //#region constructor
  constructor() { }
  //#endregion

  //#region lifecycles
  ngOnInit() {
    // setIon4Theme('dark');
  }
  //#endregion
}
