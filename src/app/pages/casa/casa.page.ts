import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.page.html',
  styleUrls: ['./casa.page.scss'],
})
export class CasaPage implements OnInit {

  constructor(public router: Router) { }
  public listo = false;

  ngOnInit() {
  }

  setListo(){
    this.listo = !this.listo;
  }

}
