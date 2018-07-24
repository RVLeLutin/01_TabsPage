import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the PushTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-push-tabs',
  templateUrl: 'push-tabs.html'
})
export class PushTabsPage {

  pushOneRoot = 'PushOnePage'
  pushTwoRoot = 'PushTwoPage'
  pushThreeRoot = 'PushThreePage'

  public data: {viewCtrl: any};

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController) {
      this.data = {
        viewCtrl: this.viewCtrl
      }
    }

}
