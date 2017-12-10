import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotePage } from './quote';
import { GoogleCardLayout3Module } from '../../components/list-view/google-card/layout-3/google-card-layout-3.module';

@NgModule({
  declarations: [
    QuotePage,
  ],
  imports: [
    GoogleCardLayout3Module,
    IonicPageModule.forChild(QuotePage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QuotePageModule {}
