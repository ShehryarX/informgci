import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimetableCourseSelectorPage } from './timetable-course-selector';

@NgModule({
  declarations: [
    TimetableCourseSelectorPage,
  ],
  imports: [
    IonicPageModule.forChild(TimetableCourseSelectorPage),
  ],
})
export class TimetableCourseSelectorPageModule {}
