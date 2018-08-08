import { Component, OnInit } from '@angular/core';

import { FireService } from './fire.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private service: FireService) {

  }
  getDat() {
    this.service.getData().subscribe(res => { console.log("get call"+JSON.stringify(res)) }),
      err => { console.log(err) }
  }
  setDat(){
    this.service.setData().subscribe(res => { console.log(res) }),
      err => { console.log(err) }
  }
  delDat()
  {
    this.service.delData().subscribe(res => { console.log(res) }),
    err => { console.log(err) }
  }
  putDat(){
    this.service.putData().subscribe(res=>{console.log(res)}),
    err=>{console.log(err)}
  }
  title = 'firebase';
}
