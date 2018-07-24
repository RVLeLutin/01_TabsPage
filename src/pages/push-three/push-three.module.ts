import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushThreePage } from './push-three';

@NgModule({
  declarations: [
    PushThreePage,
  ],
  imports: [
    IonicPageModule.forChild(PushThreePage),
  ],
})
export class PushThreePageModule {}
