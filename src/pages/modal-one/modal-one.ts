import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the ModalOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-one',
  templateUrl: 'modal-one.html',
})
export class ModalOnePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
      this.viewCtrl = this.navParams.get('viewCtrl');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalOnePage');
  }

  public dismissModalTab(){
    this.viewCtrl.dismiss();
  }

}
