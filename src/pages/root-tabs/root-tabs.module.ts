import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RootTabsPage } from './root-tabs';

@NgModule({
  declarations: [
    RootTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(RootTabsPage),
  ]
})
export class RootTabsPageModule {}
