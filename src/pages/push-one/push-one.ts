import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

/**
 * Generated class for the PushOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-push-one',
  templateUrl: 'push-one.html',
})
export class PushOnePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController) {
      this.viewCtrl = this.navParams.get('viewCtrl');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PushOnePage');
  }

  public dismissPushTab(){
    this.viewCtrl.dismiss();
  }

  public modalModalTab(){
    let modal = this.modalCtrl.create('ModalTabsPage');
    modal.present();
  }

}
