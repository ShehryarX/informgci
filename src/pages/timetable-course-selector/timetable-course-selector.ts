let _this;

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimetableCourseSelectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timetable-course-selector',
  templateUrl: 'timetable-course-selector.html',
})
export class TimetableCourseSelectorPage {
  data: any;
  events: any;

  searchTerm: any = "";
  allItems: any;

  getItems(event: any): void {
    if (!this.allItems) {
      this.allItems = this.data.items;
    }
    this.data.items = this.allItems.filter((item) => {
      return item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  onEvent(event: string, item: any) {//ITEM [EVENT OR SELECTED ITEM]
    if (this.events[event]) {
      if ('onTextChange' === event) {
        this.getItems(item);
        this.events[event](this.searchTerm);
      } else {
        this.events[event](item);
      }
    }
    console.log(event);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    _this= this;

    this.setup();

    this.events = {
      'onTextChange': function(text: any) {
      },
      'onItemClick': function(item: any) {
        console.log(item);
        _this.navParams.get('course').name =  item.title;
        _this.navParams.get('course').code = item.subtitle;
        _this.navCtrl.pop();
      }
    };
  }

  async setup() {

    this.data = {
      "headerImage" : "assets/images/background/1.jpg",
      "headerTitle" : "Replace a course",
      "items" : [ {
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "-",
        "title" : "Spare"
      },
      {
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "-",
        "title" : "Prep"
      },
      {
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ADA1O1",
        "title" : "Drama"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMI1O8",
        "title" : "Instrumental Music-Band ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMI1O1",
        "title" : "Music-Band"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMI1O2",
        "title" : "Music-Band"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMI1O3",
        "title" : "Music-Band"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMV1O1",
        "title" : "Music-Vocal/Choral"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ADA1O8",
        "title" : "Oral Fluency ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AVI1O8",
        "title" : "Visual Arts ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AVI1O1",
        "title" : "Visual Arts-Foundation"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ATC2O1",
        "title" : "Dance"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ADD2O1",
        "title" : "Drama-Production"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ADA2O1",
        "title" : "Dramatic Arts"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ADA2O8",
        "title" : "Dramatic Arts ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMI2O1",
        "title" : "Music-Band"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMG2O1",
        "title" : "Music-Guitar"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMK2O1",
        "title" : "Music-Keyboards"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMV2O1",
        "title" : "Music-Vocal/Choral"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AWT2O1",
        "title" : "New Art Techniques and Technologies"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AVI2O1",
        "title" : "Visual Arts"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AVI2O8",
        "title" : "Visual Arts"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ATC3M1",
        "title" : "Dance"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ATC3O1",
        "title" : "Dance"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ADA3M1",
        "title" : "Dramatic Arts"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AWA3O1",
        "title" : "Material Arts"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMI3M1",
        "title" : "Music-Band"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMG3M1",
        "title" : "Music-Guitar"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMK3M1",
        "title" : "Music-Keyboards"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMV3M1",
        "title" : "Music-Vocal/Choral"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AVI3M1",
        "title" : "Visual Arts"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AWQ3M1",
        "title" : "Visual Arts-Photography"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ATC4M1",
        "title" : "Dance"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AWA4M1",
        "title" : "Material Arts"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMI4M1",
        "title" : "Music-Band"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMG4M1",
        "title" : "Music-Guitar"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AMV4M1",
        "title" : "Music-Vocal/Choral"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AWD4M1",
        "title" : "Portfolio: Art Adventures"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AVI4M1",
        "title" : "Visual Arts"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "AWQ4M1",
        "title" : "Visual Arts-Photography"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "BTT1O1",
        "title" : "Introduction to Information Technology"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "BTT2O8",
        "title" : "Info and Comm Tech in Business ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "BBI2O1",
        "title" : "Introduction to Business"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "BBI2OV",
        "title" : "Introduction to Business BSAP"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "BOH4MV",
        "title" : "Bus. Leadership: Management Fundamentals BSAP"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "BDI3C1",
        "title" : "Entrepreneurship: The Venture"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "BAF3M1",
        "title" : "Financial Accounting Fundamentals"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "BTA3O1",
        "title" : "Info and Comm Tech: Digital"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "BMI3C1",
        "title" : "Marketing: Goods,Services,Events"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "BOH4M1",
        "title" : "Bus. Leadership: Management Fundamentals"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "BAT4M1",
        "title" : "Financial Accounting Principles"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "IDC4UV",
        "title" : "Financial Securities"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "BBB4M1",
        "title" : "International Business Fundamentals"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CGC1P8",
        "title" : "Issues in Canadian Geography ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CGC1D3",
        "title" : "Issues in Canadian Geography TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CHC2D1",
        "title" : "Canadian History Since WW1"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CHC2L1",
        "title" : "Canadian History Since WW1"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CHC2P1",
        "title" : "Canadian History Since WW1"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CHC2DV",
        "title" : "Canadian History Since WW1 BSAP"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CHC2P8",
        "title" : "Canadian History Since WW1 ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CHC2D3",
        "title" : "Canadian History Since WW1 TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CHA3U1",
        "title" : "American History"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CHG381",
        "title" : "Crimes against Humanity"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CGF3M1",
        "title" : "Natural Disasters and Environmental Issues"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CGG3O1",
        "title" : "Travel and Tourism"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CLU3M1",
        "title" : "Understanding Canadian Law"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CLU3MV",
        "title" : "Understanding Canadian Law BSAP"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CIA4U1",
        "title" : "Analysing Current Economic Issues"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CLN4C1",
        "title" : "Canadian and International Law"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CLN4U1",
        "title" : "Canadian and International Law"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CGR4M1",
        "title" : "Environmental Science"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CHY4U1",
        "title" : "Modern World History"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CGW4U1",
        "title" : "World Issues: A Geographic Analysis"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CGW4UV",
        "title" : "World Issues: A Geographic Analysis BSAP"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CIVCA3",
        "title" : "Civics/Careers TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CIVCA1",
        "title" : "Civics/Careers"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CIVCAV",
        "title" : "Civics/Careers BSAP"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "CIVCA8",
        "title" : "Civics/Careers ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TEJ2O1",
        "title" : "Computer Engineering"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ICS2O1",
        "title" : "Computer Science"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ICS2O3",
        "title" : "Computer Science TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TEJ3M1",
        "title" : "Computer Engineering"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ICS3C1",
        "title" : "Computer Science"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ICS3U1",
        "title" : "Computer Science"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ICS4C1",
        "title" : "Computer Science"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ICS4U1",
        "title" : "Computer Science"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TER4M1",
        "title" : "Robotics and Control Systems"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "2COOP",
        "title" : "2 Credit Coop"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "4COOP",
        "title" : "4 Credit Coop"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "COOPSE",
        "title" : "Co-op Special Ed"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "GLN4O1",
        "title" : "Navigating the Workplace"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG1D3",
        "title" : "English TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG2D1",
        "title" : "English"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG2L1",
        "title" : "English"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG2P1",
        "title" : "English"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG2DV",
        "title" : "English BSAP"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG2D8",
        "title" : "English ESL Academic"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG2P8",
        "title" : "English ESL Applied"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG2L8",
        "title" : "English ESL Essentials"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG2D3",
        "title" : "English TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG3C1",
        "title" : "English"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG3E1",
        "title" : "English"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG3U1",
        "title" : "English"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG3UV",
        "title" : "English BSAP"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG3U3",
        "title" : "English TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "EPS3O1",
        "title" : "Presentation and Speaking Skills"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG4C1",
        "title" : "English"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG4E1",
        "title" : "English"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG4U1",
        "title" : "English"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG4UV",
        "title" : "English BSAP"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ENG4U3",
        "title" : "English TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "OLC4O1",
        "title" : "OSSLT Course"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "OLC4O9",
        "title" : "OSSLT Course SE"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "EWC4U1",
        "title" : "Writers Craft"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ESLAO2",
        "title" : "English 2- Jump"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ESLAO8",
        "title" : "ESL Level 1"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ESLBO8",
        "title" : "ESL Level 2"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ESLCO8",
        "title" : "ESL Level 3"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ESLDO8",
        "title" : "ESL Level 4"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ESLEO8",
        "title" : "ESL Level 5"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "GLS1O2",
        "title" : "English 1 - JUMP"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ELDCO8",
        "title" : "English Literacy Development Level 3"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ELDDO8",
        "title" : "English Literacy Development Level 4"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ELDEO8",
        "title" : "English Literacy Development Level 5"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "GLS1O8",
        "title" : "General Learning Strategies ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ELDAO8",
        "title" : "LEAP-English Literacy Development Level 1"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "ELDBO8",
        "title" : "LEAP-English Literacy Development Level 2"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "FSF1D1",
        "title" : "French"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "FSF1P1",
        "title" : "French"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "FSF1O1",
        "title" : "French-Introductory"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "FSF2D1",
        "title" : "French"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "FSF2P1",
        "title" : "French"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "FSF3U1",
        "title" : "French"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "FSF4U1",
        "title" : "French"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "9DENGE",
        "title" : "9 Academic English/Geography"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "9DMASC",
        "title" : "9 Academic Math/Science"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "9PENGE",
        "title" : "9 Applied English/Geography"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "9PMASC",
        "title" : "9 Applied Math/Science"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "9LENGE",
        "title" : "9 Essentials English/Geography"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "9LMASC",
        "title" : "9 Essentials Math/Science"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "GPP3O1",
        "title" : "Leadership and Peer Support"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "IDC4U1",
        "title" : "Leadership in Action"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MAT1L8",
        "title" : "Mathematics ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MFM1P8",
        "title" : "Mathematics-Foundations ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MPM1D3",
        "title" : "Principles of Mathematics TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MCR3U3",
        "title" : "Functions TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MAT2L1",
        "title" : "Mathematics"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MAT2L8",
        "title" : "Mathematics ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MFM2P1",
        "title" : "Mathematics-Foundations"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MFM2P8",
        "title" : "Mathematics-Foundations ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MPM2D1",
        "title" : "Principles of Mathematics"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MPM2D3",
        "title" : "Principles of Mathematics TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MHF4U3",
        "title" : "AP - AB Equivalent TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MHF4U0",
        "title" : "AP - BC Equivalent TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MBF3C1",
        "title" : "Foundations for College Mathematics"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MCR3U1",
        "title" : "Functions"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MCF3M1",
        "title" : "Functions and Applications"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MEL3E1",
        "title" : "Math for Work and Everyday Life"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MHF4U1",
        "title" : "Advanced Functions"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MCV4U1",
        "title" : "Calculus and Vectors"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MCV4U3",
        "title" : "Calculus and Vectors TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MDM4U1",
        "title" : "Data Management"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MDM4U3",
        "title" : "Data Management TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MAP4C1",
        "title" : "Foundations for College Mathematics"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MEL4E1",
        "title" : "Math for Work and Everyday Life"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "MCT4C1",
        "title" : "Mathematics for College Technology"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "PPL1OF",
        "title" : "Healthy Active Living-Female"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "PPL1OM",
        "title" : "Healthy Active Living-Male"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "PPL2OF",
        "title" : "Healthy Active Living-Female"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "PPL2OM",
        "title" : "Healthy Active Living-Male"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "PAL4O1",
        "title" : "Basketball"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "PPL3OF",
        "title" : "Healthy Active Living-Female"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "PPL3OM",
        "title" : "Healthy Active Living-Male"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "PLF4M1",
        "title" : "Recreational Leadership"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "PAL3O1",
        "title" : "Soccer"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "PSK4U1",
        "title" : "Exercise Science"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "PPL4OF",
        "title" : "Healthy Active Living-Female"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "PPL4OM",
        "title" : "Healthy Active Living-Male"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "PAF4O1",
        "title" : "Personal and Fitness Activities"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SNC1L8",
        "title" : "Science ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SNC1P8",
        "title" : "Science ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SNC1D3",
        "title" : "Science TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SNC2D1",
        "title" : "Science"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SNC2L1",
        "title" : "Science"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SNC2L8",
        "title" : "Science"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SNC2P1",
        "title" : "Science"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SNC2P8",
        "title" : "Science ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SNC2D3",
        "title" : "Science TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SBI3C1",
        "title" : "Biology"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SBI3U1",
        "title" : "Biology"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SBI3U3",
        "title" : "Biology TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SCH3U1",
        "title" : "Chemistry"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SCH3U3",
        "title" : "Chemistry TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SPH3U1",
        "title" : "Physics"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SPH3U3",
        "title" : "Physics TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SBI4U1",
        "title" : "Biology"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SBI4U3",
        "title" : "Biology TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SCH4C1",
        "title" : "Chemistry"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SCH4U1",
        "title" : "Chemistry"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SCH4U3",
        "title" : "Chemistry TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SES4U1",
        "title" : "Earth and Space Science"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SPH4C1",
        "title" : "Physics"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SPH4U1",
        "title" : "Physics"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SPH4U3",
        "title" : "Physics TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "SPH4U0",
        "title" : "Physics-Advanced Placement C TOPS"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HFN1O1",
        "title" : "Food and Nutrition"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HFN1O8",
        "title" : "Food and Nutrition ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HIF1O8",
        "title" : "Individual, Family and Social Living ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HIF2O1",
        "title" : "Exploring Family Studies"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HIF2O8",
        "title" : "Exploring Family Studies - ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HSP3C1",
        "title" : "Intro to Anthropology/ Psychology/Sociology"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HSP3U1",
        "title" : "Intro to Anthropology/ Psychology/Sociology"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HIP4O1",
        "title" : "Managing Personal Resources"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HZB3M1",
        "title" : "Philosophy: The Big Questions"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HPC3O9",
        "title" : "Raising Healthy Children SE"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HPW3C1",
        "title" : "Raising Infants and Young Children"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HNC3C1",
        "title" : "Understanding Fashion"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HRT3M1",
        "title" : "World Religions: Perspectives/Issues/Challenges"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HHS4U1",
        "title" : "Families in Canada"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HHG4M1",
        "title" : "Human Development Throughout the Lifespan"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "HZT4U1",
        "title" : "Philosophy: Questions and Theories"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "GLE1O1",
        "title" : "Learning Strategies"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "GLE2O1",
        "title" : "Learning Strategies"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "GLE3O1",
        "title" : "Learning Strategies"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "GLE4O1",
        "title" : "Learning Strategies"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TIJ1O1",
        "title" : "Exploring Technology"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TGJ2O1",
        "title" : "Introduction to Multimedia Level 1"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "THJ2O1",
        "title" : "Exploring Green Industries"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "THJ2O8",
        "title" : "Exploring Green Industries ESL"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TFJ2O1",
        "title" : "Hospitality/Culinary Arts"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TDJ2O1",
        "title" : "Technological Design"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TTJ2O1",
        "title" : "Transportation Technology"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TGJ3M1",
        "title" : "Art & Design Level 2-Advertising"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TDJ3M1",
        "title" : "AutoCAD and Design"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "THJ3M1",
        "title" : "Exploring Green Industries"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TGG3M1",
        "title" : "Graphic Arts/Publishing"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TFJ3C1",
        "title" : "Hospitality/Culinary Arts"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TFJ3C2",
        "title" : "Hospitality/Culinary Arts"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TGI3M1",
        "title" : "Multimedia Level 2-3D Animation/Audio/Video"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TTJ3C1",
        "title" : "Transportation Technology"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TDJ4M1",
        "title" : "Engineering Design and 3D Modelling"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TGG4M1",
        "title" : "Graphic/TV and Video Arts"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TFJ4C1",
        "title" : "Hospitality/Culinary Arts"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TGI4M1",
        "title" : "Multimedia Level 3-3D Animation or Web Design"
      },
{
        "avatar" : "assets/images/avatar/7.jpg",
        "button" : "GET",
        "subtitle" : "TTJ4C1",
        "title" : "Transportation Technology"
      }
],
      "title" : "Search"
    }
  }

}
