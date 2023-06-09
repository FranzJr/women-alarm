import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-embarazo',
  templateUrl: './embarazo.page.html',
  styleUrls: ['./embarazo.page.scss'],
})
export class EmbarazoPage implements OnInit {

  constructor(public router: Router) { }
  public weeks = [];
  public listo = false;

  ngOnInit() {
    this.weeks = Array.from(Array(40).keys())
  }

  setListo(){
    this.listo = !this.listo;
  }

}
