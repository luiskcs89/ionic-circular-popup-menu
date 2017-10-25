import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { ButtonDetails } from '../model/button-details';

@Component({
  selector: 'page-circular-menu',
  styleUrls: ['./circular-menu.scss'],
  templateUrl: 'circular-menu.html'
})
export class CircularMenuPage {

  buttonDetails: ButtonDetails[];

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
  	this.buttonDetails = navParams.get('buttonDetails');
  }

  runAndDismiss(buttonDetail:ButtonDetails) {
  	buttonDetail.onclick();
  	this.viewCtrl.dismiss();
  }

}
