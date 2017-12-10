import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimetablePage } from './timetable';
import { DragAndDropLayout1Module } from '../../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module';

@NgModule({
  declarations: [
    TimetablePage,
  ],
  imports: [
    IonicPageModule.forChild(TimetablePage),
    DragAndDropLayout1Module,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TimetablePageModule {}
