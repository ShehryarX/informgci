import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WizardLoaderPage } from './wizard-loader';

@NgModule({
  declarations: [
    WizardLoaderPage,
  ],
  imports: [
    IonicPageModule.forChild(WizardLoaderPage),
  ],
})
export class WizardLoaderPageModule {}
