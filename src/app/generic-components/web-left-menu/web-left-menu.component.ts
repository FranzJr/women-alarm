import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-left-menu',
  templateUrl: './web-left-menu.component.html',
  styleUrls: ['./web-left-menu.component.scss'],
})
export class WebLeftMenuComponent implements OnInit {

  @Input() current: string = "";

  constructor(public router: Router) { }

  ngOnInit() { }

  periodo() {
    this.router.navigate(['/periodo']);
  }

  embarazo() {
    this.router.navigate(['/embarazo']);
  }

  planificar() {
    this.router.navigate(['/metodo']);
  }

  casa() {
    this.router.navigate(['/casa']);
  }


}
