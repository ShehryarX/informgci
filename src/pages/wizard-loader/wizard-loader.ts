let _u : any;

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WizardLoaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wizard-loader',
  templateUrl: 'wizard-loader.html',
})
export class WizardLoaderPage {

  data: any;
  events:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    _u=this;

  this.data = {
    "btnFinish" : "Finish",
    "btnNext" : "Next",
    "items" : [ {
      "backgroundImage" : "assets/images/background/21.jpg",
      "subtitle" : "Overview",
      "title" : "The Marc Garneau Companion app makes sure you're always in the loop!" 
    }, {
      "backgroundImage" : "assets/images/background/22.jpg",
      "subtitle" : "Updates",
      "title" : "Stay posted on annoucements, events, and clubs at lunch. Also get push notifications for any updates."
    }, {
      "backgroundImage" : "assets/images/background/23.jpg",
      "subtitle" : "Let's Get Started",
      "title" : "Have fun! If you have any suggestions or come across bugs, please contact the developer."
    } ]
  }

  this.events = {
    'onFinish': function(event: any) {
        _u.navCtrl.pop();
    }
  };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WizardLoaderPage');
  }

}
