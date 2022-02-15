import { Injectable,} from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class DataService {
  correctCount=0
  judge=''
  answerData=new Array
  constructor(
    private http:HttpClient,
  ) { }
  importData(){
    return this.http.get('/assets/spl-weapon-data.json')
  }
  resetAnswerData(){
    this.answerData=[null]
  }
  importAnswerData(
    quesCount:number,
    correctCount:number,
    weaponType:string,
    subWeapon:string,
    specialWeapon:string,
    correctWeaponName:string,
    answerWeaponName:string,
    ){
      if(answerWeaponName==correctWeaponName)this.judge='正解 ◯'
      else this.judge='不正解 ×'
    this.answerData.push([
      quesCount,
      weaponType,
      subWeapon,
      specialWeapon,
      correctWeaponName,
      answerWeaponName,
      this.judge
    ])
    this.correctCount=correctCount
  }
  getCorrectCount(){
    return this.correctCount
  }
  getAnswerData(){
    return this.answerData
  }
}
