import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the RootTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-root-tabs',
  templateUrl: 'root-tabs.html'
})
export class RootTabsPage {

  rootOneRoot = 'RootOnePage'
  rootTwoRoot = 'RootTwoPage'
  rootThreeRoot = 'RootThreePage'

  public data: {viewCtrl: any};

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController) {
      this.data = { viewCtrl: this.viewCtrl }
    }


}
