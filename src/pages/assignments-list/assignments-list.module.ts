import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignmentsListPage } from './assignments-list';
import { SwipeToDismissLayout1Module } from '../../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module';

@NgModule({
  declarations: [
    AssignmentsListPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignmentsListPage),
    SwipeToDismissLayout1Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AssignmentsListPageModule {}
