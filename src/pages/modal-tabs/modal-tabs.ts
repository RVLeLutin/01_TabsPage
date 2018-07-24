import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the ModalTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-tabs',
  templateUrl: 'modal-tabs.html'
})
export class ModalTabsPage {

  modalOneRoot = 'ModalOnePage'
  modalTwoRoot = 'ModalTwoPage'
  modalThreeRoot = 'ModalThreePage'

  public data: {viewCtrl: any};


  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController) {
    this.data = {
      viewCtrl: this.viewCtrl
    }
  }

}
