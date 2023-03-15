import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.page.html',
  styleUrls: ['./periodo.page.scss'],
})
export class PeriodoPage implements OnInit {

  constructor(public router: Router) { }
  public days = [];
  public listo = false;

  ngOnInit() {
    this.days = Array.from(Array(30).keys())
  }

  embarazo(){
    this.router.navigateByUrl('/embarazo');
  }

  planificar(){
    this.router.navigateByUrl('/metodo');
  }

  casa(){
    this.router.navigateByUrl('/casa');
  }

  manual(){
    this.router.navigateByUrl('/alarma-manual');
  }

  setListo(){
    this.listo = !this.listo;
  }

}
