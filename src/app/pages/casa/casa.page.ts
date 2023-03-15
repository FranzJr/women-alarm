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

  embarazo(){
    this.router.navigateByUrl('/embarazo');
  }

  planificar(){
    this.router.navigateByUrl('/metodo');
  }

  periodo(){
    this.router.navigateByUrl('/periodo');
  }

  setListo(){
    this.listo = !this.listo;
  }

}
