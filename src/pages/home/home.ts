import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, reorderArray } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { TimetableCourseSelectorPage } from '../timetable-course-selector/timetable-course-selector';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { NativeStorage } from '@ionic-native/native-storage';
import {Platform, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { WizardLoaderPage } from '../wizard-loader/wizard-loader';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  updatedData:  FirebaseListObservable<any[]>;
  dayData: any;
  events: any;
  quotesData: any;
  timetable: any;
  timetableEvents: any;
  data: any;
  content: any;
  timings : any;
  timeRanges: any;
  refresh: any;
  courseData: any;
  day_which_timetable_is_stored: string;
  updateState = false;

  dayStored() {
    let temp = this.db.list('/dayInfo/items').valueChanges().subscribe(res=>
        this.data.dayStored = this.getTitle(res));
  }

  getTitle(res: any) {
    return res[0].title;
  }
  
  constructor(private dbg:ToastController, private platform: Platform, private nativeStorage: NativeStorage, public navCtrl: NavController, public db: AngularFireDatabase,

    public push: Push, public alertCtrl: AlertController) {
    this.timings = [
        {time: "8:15-9:30"},
        {time: "9:35-10:00"},
        {time: "10:53-12:00"},
        {time: "12:50-2:00"},
        {time: "2:05-3:15"}
    ]
    
    this.platform.ready().then(() => {
      this.pushsetup();

      this.nativeStorage.getItem('timetable').then(
        (data) => {
          this.data = data;

          this.refresh = setInterval(() => {
            let myDate = new Date();

            let target = -1;
            let hours = myDate.getHours();
            let minutes = myDate.getMinutes();
            let totalMinutes = hours * 60 + minutes;

            this.updateTimeRanges();
            
            for(let cnt = 0; cnt < 5; cnt++) {
              let obj = this.timeRanges[cnt];
              let lower = obj.hours1 * 60 + obj.minutes1;
              let upper = obj.hours2 * 60 + obj.minutes2;
              if(totalMinutes >= lower && totalMinutes <= upper) {
                target = cnt;
                break;
              }
            }
            
            for(let i = 0; i < this.data.items.length; i++) {
                this.data.items[i].selected = false;
            }

            if(typeof this.dayData.items[0].subtitle != 'undefined') {
              let datechk = this.dayData.items[0].subtitle;

              if(datechk.indexOf("Saturday") >= 0 || datechk.indexOf("Sunday") >= 0) {
                
              } else {
                if(target >= 0) {
                    this.data.items[target].selected = true;
                }
              }
            }
          }, 10000);
        }, (error) => {
          this.data = {
            "header": "Timetable",
            "changed": false,
            "items": [
              { 
                "id": 1,
                "title": "Click to change",
                "subtitle": "-",
                "textIcon": "8:15 - 9:31",
                "selected": false
              },
              {
                "id": 2,
                "title": "Click to change",
                "subtitle": "-",
                "textIcon": "9:35-10:46",
                "selected": false
              },
              {
                "id": 3,
                "title": "Click to change",
                "subtitle": "-",
                "textIcon": "10:50-12:01",
                "selected": false
              },
              {
                "id": 4,
                "title": "Click to change",
                "subtitle": "-",
                "textIcon": "12:49 - 14:00",
                "selected": false
              },
              {
                "id": 5,
                "title": "Click to change",
                "subtitle": "-",
                "textIcon": "14:04 - 15:15",
                "selected": false
              }
            ]
          }

        this.nativeStorage.setItem( 'timetable', this.data).then(
          (works) => {
            this.refresh = setInterval(() => {
              let myDate = new Date();
              
              let target = -1;
              let hours = myDate.getHours();
              let minutes = myDate.getMinutes();
              let totalMinutes = hours * 60 + minutes;
        
              this.updateTimeRanges();

              for(let cnt = 0; cnt < 5; cnt++) {
                let obj = this.timeRanges[cnt];
                let lower = obj.hours1 * 60 + obj.minutes1;
                let upper = obj.hours2 * 60 + obj.minutes2;

                if(totalMinutes >= lower && totalMinutes <= upper) {
                  target = cnt;
                  break;
                }
              }

              for(let i = 0; i < this.data.items.length; i++) {
                  this.data.items[i].selected = false;
              }
              
            if(typeof this.dayData.items[0].subtitle != 'undefined') {
              let datechk = this.dayData.items[0].subtitle;
              if(datechk.indexOf("Saturday") >= 0 || datechk.indexOf("Sunday") >= 0) {
                
              } else {
                if(typeof datechk != 'undefined' && target >= 0) {
                    this.data.items[target].selected = true;
                }
              }
            }
            }, 10000);
            let temp = this.db.list('/dayInfo/items').valueChanges().subscribe(res=>
              this.getDayFromItem(res))


            this.initTutorial(); 
          },
          (err) => {}
          ); 

          this.nativeStorage.setItem('last_day', "Day 1"); 

          }
    )});

    this.quotesData = {
      "items": [
        {
          "title": "Quote of the Day",
          "name": "Loading",
          "quote": "Loading",
        },
      ]
    }

    this.dayData = {
      "items": [{
        "title": "Loading",
        "subtitle": "Loading",
        "backgroundImage": "assets/images/background/1.jpg",
        "icon": "ios-arrow-dropright",
        "iconText": "View more",
        "eventsList": [
        ],
        "clubsList": [
        ],
        "announcementsList": [
        ],
      }],
    }

    this.events = {
      'onItemClick': function(item: any) {
         console.log(item);
      },
      'onRates': function(index: number) {
          console.log('onRates');
      },
      'onCheckBoxClick': function(item: any) {
          console.log('onCheckBoxClick');
      },
      'onButtonClick' : function(item: any) {
         console.log('onButtonClick');
      }
    };

    this.timetableEvents = {
      'onItemClick': function(item: any) {
         console.log('onItemClick');
      },
      'onRates': function(index: number) {
          console.log('onRates');
      },
      'onCheckBoxClick': function(item: any) {
          console.log('onCheckBoxClick');
      },
      'onButtonClick' : function(item: any) {
         console.log('onButtonClick');
      }
    };

    this.updateInApp();

    this.updateAppData = setInterval(() => {
      this.updateInApp(); 
    }, 60000);
  }

  updateAppData: any;

  updateInApp() {
    let temp = this.db.list('/dayInfo/items').valueChanges().subscribe(res=>
      this.updateData(res)
    );
  }

  updateDay() {
    this.nativeStorage.getItem( 'day_which_timetable_is_stored').then(
      (works) => {this.day_which_timetable_is_stored = works, 'found'},
      (err) => {this.day_which_timetable_is_stored = this.dayData.items[0].title}); 
  }

  getDayFromItem(res) {
    this.day_which_timetable_is_stored = res[0].title;
    this.nativeStorage.setItem( 'day_which_timetable_is_stored', this.day_which_timetable_is_stored).then(
      (works) => {},
      (err) => {}); 
  }
  
  updateDataInStorage() {
    this.nativeStorage.setItem('timetable', this.data);    
  }
  
  swapTimetable() {
    let tempData = {
      "header": this.data.header,
      "changed": this.data.changed,
      "items": [
        this.data.items[0],
        this.data.items[2],
        this.data.items[1],
        this.data.items[4],
        this.data.items[3],
      ]
    }
     
    this.data = tempData;
    
    this.data.changed = true;
    this.updateDataInStorage();
  }

  //
  //isNotOriginalDay() {
  //  this.updateDay();
  //  return this.day_which_timetable_is_stored != this.dayData.items[0].title;
  //}

  updateData(res: any) {

    if(this.dayData.items[0].title != 'Loading') {
      if(this.dayData.items[0].title != res[0].title) {
        this.data.changed = false;
        }
    }


    this.dayData = {
      "items": [{
        "title": res[0].title,
        "subtitle": res[0].subtitle,
        "backgroundImage": res[0].backgroundImage,
        "icon": res[0].icon,
        "iconText": res[0].iconText,
        "eventsList": res[0].eventsList,
        "clubsList": res[0].clubsList,
        "announcementsList": res[0].announcementsList
      }]
    }

    this.timings = res[0].timings;
    this.quotesData.items[0].name = res[0].name,
    this.quotesData.items[0].quote = res[0].quote;
    
    
    if(!this.data.changed) {
      this.nativeStorage.getItem( 'day_which_timetable_is_stored').then(
        (works) => {
          this.day_which_timetable_is_stored = works;
              this.swapTimetable();
            },
        (err) => {this.day_which_timetable_is_stored = this.dayData.items[0].title}); 

    }

    this.nativeStorage.getItem('last_day').then(
      (workss)=>{
        if(workss != res[0].title && !this.updateState) {
          this.swapTimetable();
          this.nativeStorage.setItem('last_day', res[0].title);
          this.updateState = true;
        } else {
          this.updateState = true;
        }
      },
      (err)=>{}
    );

    this.updateTimeRanges();
  }
  

  updateTimeRanges() {
    this.timeRanges = [
      {range: 0, minutes1: 0, hours2: 0, minutes2: 0},
      {hours1: 0, minutes1: 0, hours2: 0, minutes2: 0},
      {hours1: 0, minutes1: 0, hours2: 0, minutes2: 0},
      {hours1: 0, minutes1: 0, hours2: 0, minutes2: 0},
      {hours1: 0, minutes1: 0, hours2: 0, minutes2: 0}
    ];

    for(let i = 0; i < 5; i++) {
      let current = this.timings[i].time.split("-");
      let first = current[0].split(":");
      let second = current[1].split(":");
      this.timeRanges[i].hours1 = parseInt(first[0]);
      this.timeRanges[i].minutes1 = parseInt(first[1]);
      this.timeRanges[i].hours2 = parseInt(second[0]);
      this.timeRanges[i].minutes2 = parseInt(second[1]);
    }
  }  

  initTutorial() {
    this.navCtrl.push(WizardLoaderPage)
  }

  pushsetup() {
      const options: PushOptions = {
      android: {
      },
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
      windows: {}
    };

    const pushObject: PushObject = this.push.init(options);
    pushObject.on('notification').subscribe((notification: any) => {
      if (notification.additionalData.foreground) {
        let youralert = this.alertCtrl.create({
          title: 'School Update',
          message: notification.message
        });
        youralert.present();
      }
    });
  
    pushObject.on('registration').subscribe((registration: any) => {
      //do whatever you want with the registration ID
    });
  
    pushObject.on('error').subscribe(error => {}); 
  }
 
  _params: any;
  _index: number;

  onEvent(event: string, item: any, e: any) {
    this._params = { course: {name: "", code: "" }};
    
    for(let i = 0; i < this.data.items.length; i++) {
      if(this.data.items[i].id == item.id) {
        this._index = i;

        break;
      }
    }
    this.navCtrl.push(TimetableCourseSelectorPage,this._params);
  }

  
  ionViewDidEnter() {
    if(this._params == null) return;

    this.nativeStorage.getItem( 'day_which_timetable_is_stored').then(
      (works) => {this.day_which_timetable_is_stored = works},
      (err) => {this.day_which_timetable_is_stored = this.dayData.items[0].title}); 

    let title = this._params.course.name;
    let code = this._params.course.code;
    
    if(title != null && title != "" && code != null && code != "") {
      this.platform.ready().then(() => {
        this.nativeStorage.getItem('timetable').then(
          (abv) => {
            this.data.items[this._index] = {
              "id": 5,
              "title": title,
              "subtitle": code,
              "textIcon": "0:00",
              "selected": false
            }

            for(let i = 0; i < this.data.items.length; i++) {
              this.data.items[i].id = i;
            }

            this.nativeStorage.setItem('timetable', this.data);    

            this._params = { course: {name: "", code: "" }};
            this._index = 0;      
          }, (error) => {
          }
        )
      });
    }
  }

  reorderItems = (indexes): void => {
    this.platform.ready().then(() => {
      this.nativeStorage.getItem('timetable').then(
        (abv) => {
          this.data.items = reorderArray(this.data.items, indexes);

          for(let i = 0; i < this.data.items.length; i++) {
            this.data.items[i].textIcon = this.timings[i].time;
          }
          this.nativeStorage.setItem('timetable', this.data);          
        }, (error) => {
        }
    )});
  }

  suggestions() {
    let toast = this.dbg.create({
      message: "Please email xshehryar@gmail.com, leave a rating comment, or contact the SAC.",
      duration: 10000,
      position: 'bottom'
    });
    
    toast.present();
  }
}