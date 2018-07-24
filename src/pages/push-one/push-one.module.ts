import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushOnePage } from './push-one';

@NgModule({
  declarations: [
    PushOnePage,
  ],
  imports: [
    IonicPageModule.forChild(PushOnePage),
  ],
})
export class PushOnePageModule {}
