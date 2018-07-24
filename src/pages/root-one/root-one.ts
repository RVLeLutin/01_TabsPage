import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

/**
 * Generated class for the RootOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-root-one',
  templateUrl: 'root-one.html',
})
export class RootOnePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RootOnePage');
  }

  public pushPushTab(){
    this.navCtrl.push('PushTabsPage');
  }

  public modalModalTab(){
    let modal = this.modalCtrl.create('ModalTabsPage');
    modal.present();
  }

}
