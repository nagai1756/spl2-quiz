import { AddContentComponent } from './add-content/add-content.component';
import { DataService } from './../data.service';
import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {
  items=new Array
  factory!:ComponentFactory<AddContentComponent>
  quesCount=0
  correctCount=0
  constructor(
    public viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.items=this.dataService.getAnswerData()
    console.log(this.dataService.getAnswerData())
    this.quesCount=this.dataService.getAnswerData().length
    this.correctCount=this.dataService.getCorrectCount()
  }
}
