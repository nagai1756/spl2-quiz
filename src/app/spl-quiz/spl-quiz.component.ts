import { BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef,} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-spl-quiz',
  templateUrl: './spl-quiz.component.html',
  styleUrls: ['./spl-quiz.component.scss']
})
export class SplQuizComponent implements OnInit {
  weaponInfo!:FormGroup
  Buttons!:FormGroup
  data!: Observable<any>
  weaponData=[]
  buttonOptions!:number
  weaponType!:number
  correctWeaponNumber!:number
  correctButton!:number
  dummyWeaponNumber!:number
  modalRef!:BsModalRef
  quesCount=1;
  remainButtons=[1,1,1,1]
  judge!:string
  failText!:string
  correctCount=0
  maxQuesCount=129
  dialog_quesCount!:number
  dialog_text!:string
  remainWeaponData=[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//シューター27種
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//ブラスター15種
    [1,1,1,1,1,1],//リールガン6種
    [1,1,1,1],//ボトルガイザー2種+ダミー2種
    [1,1,1,1,1,1,1,1,1,1],//ローラー10種
    [1,1,1,1,1,1],//フデ6種
    [1,1,1,1,1],//スコ有りチャージャー5種
    [1,1,1,1,1,1,1,1,1,1,1,1,1],//スコ無しチャージャー13種
    [1,1,1,1,1,1,1,1,1,1,1,1],//スロッシャー12種
    [1,1,1,1,1,1,1,1,1,1,1,1],//スピナー12種
    [1,1,1,1,1,1,1,1,1,1,1,1,1],//マニューバー13種
    [1,1,1,1,1,1,1,1]//シェルター8種
  ]
  remainButtonsData=[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//シューター27種
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//ブラスター15種
    [1,1,1,1,1,1],//リールガン6種
    [1,1,1,1],//ボトルガイザー2種+ダミー2種
    [1,1,1,1,1,1,1,1,1,1],//ローラー10種
    [1,1,1,1,1,1],//フデ6種
    [1,1,1,1,1],//スコ有りチャージャー5種
    [1,1,1,1,1,1,1,1,1,1,1,1,1],///スコ無しチャージャー13種
    [1,1,1,1,1,1,1,1,1,1,1,1],//スロッシャー12種
    [1,1,1,1,1,1,1,1,1,1,1,1],//スピナー12種
    [1,1,1,1,1,1,1,1,1,1,1,1,1],//マニューバー13種
    [1,1,1,1,1,1,1,1]//シェルター8種
  ]
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private modalService: BsModalService,
    ) {
      this.data=this.dataService.importData()
  }

  ngOnInit(): void {
    this.buildForm()
    this.data.subscribe(json=>{
      this.weaponData=json
      this.setQuestion()
      this.buttonOptions=this.remainButtonsData[this.weaponType].length //選択肢の候補の数
      this.setDummyButton()
      this.reset()
    })
  }

  private buildForm(){
    this.weaponInfo=this.fb.group({
    weaponType:[null],
    subWeapon:[null],
    specialWeapon:[null]
    })
    this.Buttons=this.fb.group({
      selector1:[null],
      selector2:[null],
      selector3:[null],
      selector4:[null]
    })
  }

  private setCorrectButton(correctButton:number){
    if(correctButton==0){
      this.Buttons.patchValue({selector1:this.weaponData[this.weaponType][this.correctWeaponNumber]['weapon-name']})
    }
    if(correctButton==1){
      this.Buttons.patchValue({selector2:this.weaponData[this.weaponType][this.correctWeaponNumber]['weapon-name']})
    }
    if(correctButton==2){
      this.Buttons.patchValue({selector3:this.weaponData[this.weaponType][this.correctWeaponNumber]['weapon-name']})
    }
    if(correctButton==3){
      this.Buttons.patchValue({selector4:this.weaponData[this.weaponType][this.correctWeaponNumber]['weapon-name']})
    }
  }

  private setQuestion(){
    while(1){
      this.weaponType=Math.floor(Math.random()*this.remainWeaponData.length)
      if(this.weaponType==3)this.correctWeaponNumber=Math.floor(Math.random()*2)
      else this.correctWeaponNumber=Math.floor(Math.random()*this.remainWeaponData[this.weaponType].length)
      if(this.remainWeaponData[this.weaponType][this.correctWeaponNumber]){
        this.remainWeaponData[this.weaponType][this.correctWeaponNumber]=0
        break;
      }
    }
    // console.log(this.weaponData[this.weaponType][this.correctWeaponNumber]['weapon-name'])
    this.weaponInfo.patchValue({
      weaponType:this.weaponData[this.weaponType][this.correctWeaponNumber]['weapon-type'],
      subWeapon:this.weaponData[this.weaponType][this.correctWeaponNumber]['sub-weapon-name'],
      specialWeapon:this.weaponData[this.weaponType][this.correctWeaponNumber]['special-weapon-name']
    })
    if(this.weaponType==3)this.correctButton=Math.floor(Math.random()*2);
    else this.correctButton=Math.floor(Math.random()*4);
    this.remainButtons[this.correctButton]=0
    this.remainButtonsData[this.weaponType][this.correctWeaponNumber]=0
    this.setCorrectButton(this.correctButton) //正解の選択肢のセット
  }

  private selectDummyNumber(){
    while(1){
      this.dummyWeaponNumber=Math.floor(Math.random()*this.buttonOptions)
      if(this.remainButtonsData[this.weaponType][this.dummyWeaponNumber]){
        break;
      }
    }
  }

  private setDummyButton(){
    if(this.remainButtons[0]){
      if(this.weaponType==3){
        if(this.remainButtonsData[3][0])this.dummyWeaponNumber=0
        else this.dummyWeaponNumber=1;
      }
      else {
        this.selectDummyNumber()
      }
      this.Buttons.patchValue({selector1:this.weaponData[this.weaponType][this.dummyWeaponNumber]['weapon-name']})
      this.remainButtonsData[this.weaponType][this.dummyWeaponNumber]=0
    }
    if(this.remainButtons[1]){
      if(this.weaponType==3){
        if(this.remainButtonsData[3][0])this.dummyWeaponNumber=0
        else this.dummyWeaponNumber=1;
      }
      else {
        this.selectDummyNumber()
      }
      this.Buttons.patchValue({selector2:this.weaponData[this.weaponType][this.dummyWeaponNumber]['weapon-name']})
      this.remainButtonsData[this.weaponType][this.dummyWeaponNumber]=0
    }
    if(this.remainButtons[2]){
      this.selectDummyNumber()
      this.Buttons.patchValue({selector3:this.weaponData[this.weaponType][this.dummyWeaponNumber]['weapon-name']})
      this.remainButtonsData[this.weaponType][this.dummyWeaponNumber]=0
    }
    if(this.remainButtons[3]){
      this.selectDummyNumber()
      this.Buttons.patchValue({selector4:this.weaponData[this.weaponType][this.dummyWeaponNumber]['weapon-name']})
      this.remainButtonsData[this.weaponType][this.dummyWeaponNumber]=0
    }
  }

  reset(){
    for(let i=0;i<this.remainButtonsData[this.weaponType].length;i++)this.remainButtonsData[this.weaponType][i]=1
    for(let i=0;i<this.remainButtons.length;i++)this.remainButtons[i]=1
  }

  goToNext(template:TemplateRef<any>,event:any):void{ //ボタンをクリックした時の処理
    if(this.quesCount<=this.maxQuesCount){
      this.dialog_quesCount=this.quesCount
      if(event.target.value==this.weaponData[this.weaponType][this.correctWeaponNumber]['weapon-name']){
        this.judge='正解！'
        this.failText=''
        this.correctCount++

      }
      else{
        this.judge='不正解！'
        this.failText='正解は'+this.weaponData[this.weaponType][this.correctWeaponNumber]['weapon-name']
      }
      // console.log(this.quesCount)
      this.dataService.importAnswerData(
        this.quesCount,
        this.correctCount,
        this.weaponData[this.weaponType][this.correctWeaponNumber]['weapon-type'],
        this.weaponData[this.weaponType][this.correctWeaponNumber]['sub-weapon-name'],
        this.weaponData[this.weaponType][this.correctWeaponNumber]['special-weapon-name'],
        this.weaponData[this.weaponType][this.correctWeaponNumber]['weapon-name'],
        event.target.value
        )
      this.quesCount++
      this.modalRef = this.modalService.show(template)
      this.dialog_text=this.judge+`${this.correctCount}`+'/'+`${this.dialog_quesCount}`
      this.ngOnInit()
    }
  }
}
