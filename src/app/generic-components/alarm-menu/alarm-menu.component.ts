import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarm-menu',
  templateUrl: './alarm-menu.component.html',
  styleUrls: ['./alarm-menu.component.scss'],
})
export class AlarmMenuComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

  manual() {
    this.router.navigateByUrl('/alarma-manual');
  }

}
