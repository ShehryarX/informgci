import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, reorderArray } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { TimetableCourseSelectorPage } from '../../../../pages/timetable-course-selector/timetable-course-selector';

@IonicPage()
@Component({
    selector: 'drag-and-drop-layout-1',
    templateUrl: 'drag-and-drop.html'
})
export class DragAndDropLayout1 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    
    content: Content;
    timings : any;

    refresh: any;
    courseData: any;

    constructor(public navCtrl: NavController) {
        this.timings = [
            {time: "8:15-9:30"},
            {time: "9:35-10:00"},
            {time: "10:53-12:00"},
            {time: "12:50-2:00"},
            {time: "2:05-3:15"}
        ]

        this.refresh = setInterval(() => {
            let myDate = new Date();
            
            let target = -1;
            let hours = myDate.getHours();
            let minutes = myDate.getMinutes();
            let totalMinutes = hours * 60 + minutes;

            if(totalMinutes >= 496 && totalMinutes <= 570) {
                target = 0;
            } else if(totalMinutes >= 9 * 60 + 35 && totalMinutes <= 10 * 60 + 48) {
                target = 1;
            } else if(totalMinutes >= 10 * 60 + 48 && totalMinutes <= 12 * 60 + 0) {
                target = 2;
            } else if(totalMinutes >= 12 * 60 + 50 && totalMinutes <= 14 * 60 + 0) {
                target = 3;
            } else if(totalMinutes >= 14 * 60 + 0 && totalMinutes <= 15 * 60 + 15) {
                target = 4;
            }

            for(let i = 0; i < this.data.items.length; i++) {
                this.data.items[i].selected = false;
            }

            if(target >= 0) {
                this.data.items[target].selected = true;
            }
        }, 1000);
    }

    onEvent(event: string, item: any, e: any) {
        this.navCtrl.push(TimetableCourseSelectorPage);
    }

    reorderItems = (indexes): void => {
        this.data.items = reorderArray(this.data.items, indexes);
        console.log(this.data.items);

        for(let i = 0; i < this.data.items.length; i++) {
            this.data.items[i].textIcon = this.timings[i].time;
        }
    }
}
    