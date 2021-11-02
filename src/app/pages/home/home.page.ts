//#region ng
import {
  Component,
  OnInit
} from '@angular/core';
//#endregion

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  //#region publics
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.3,
    pagination: false,
    autoHeight: true
  };
  //#endregion

  //#region constructor
  constructor() { }
  //#endregion

  //#region lifecycles
  ngOnInit() {

  }
  //#endregion

}
