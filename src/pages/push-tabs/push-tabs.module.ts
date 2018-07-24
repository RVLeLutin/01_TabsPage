import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushTabsPage } from './push-tabs';

@NgModule({
  declarations: [
    PushTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(PushTabsPage),
  ]
})
export class PushTabsPageModule {}
