import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WizardPage } from './wizard';
import { WizardLayout3Module } from '../../components/wizard/layout-3/wizard-layout-3.module';

@NgModule({
  declarations: [
    WizardPage,
  ],
  imports: [
    IonicPageModule.forChild(WizardPage),
    WizardLayout3Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WizardPageModule {}
