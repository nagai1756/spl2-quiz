import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
  // items=new Array
  items=new Array
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.items=this.dataService.getAnswerData()
    // this.items.quesCount=this.dataService.getQuesCount()
    // console.log(this.quesCount)
    // this.weaponType=this.dataService.getAnswerData()[this.quesCount][0]
    // this.sub=this.dataService.getAnswerData()[this.quesCount][1]
    // this.special=this.dataService.getAnswerData()[this.quesCount][2]
    // this.correctAnswer=this.dataService.getAnswerData()[this.quesCount][3]
    // this.yourAnswer=this.dataService.getAnswerData()[this.quesCount][4]
  }
}
