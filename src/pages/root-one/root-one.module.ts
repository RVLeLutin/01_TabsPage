import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RootOnePage } from './root-one';

@NgModule({
  declarations: [
    RootOnePage,
  ],
  imports: [
    IonicPageModule.forChild(RootOnePage),
  ],
})
export class RootOnePageModule {}
