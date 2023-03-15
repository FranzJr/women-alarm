import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metodo',
  templateUrl: './metodo.page.html',
  styleUrls: ['./metodo.page.scss'],
})
export class MetodoPage implements OnInit {

  constructor(public router: Router) { }
  public listo = false;

  ngOnInit() {
  }

  casa(){
    this.router.navigateByUrl('/casa');
  }

  embarazo(){
    this.router.navigateByUrl('/embarazo');
  }

  periodo(){
    this.router.navigateByUrl('/periodo');
  }

  setListo(){
    this.listo = !this.listo;
  }

}
