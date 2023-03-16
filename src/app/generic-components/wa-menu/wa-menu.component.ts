import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wa-menu',
  templateUrl: './wa-menu.component.html',
  styleUrls: ['./wa-menu.component.scss'],
})
export class WaMenuComponent implements OnInit {

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
