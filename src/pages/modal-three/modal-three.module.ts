import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalThreePage } from './modal-three';

@NgModule({
  declarations: [
    ModalThreePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalThreePage),
  ],
})
export class ModalThreePageModule {}
