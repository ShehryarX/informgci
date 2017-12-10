import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefaultViewPage } from './default-view';
import { ExpandableLayout2Module } from '../../components/list-view/expandable/layout-2/expandable-layout-2.module';

@NgModule({
  declarations: [
    DefaultViewPage,
  ],
  imports: [
    IonicPageModule.forChild(DefaultViewPage),
    ExpandableLayout2Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DefaultViewPageModule {}
