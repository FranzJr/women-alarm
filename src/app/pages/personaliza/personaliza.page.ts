import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserOptionsPersonalize } from '../../interfaces/user-options';

@Component({
  selector: 'app-personaliza',
  templateUrl: './personaliza.page.html',
  styleUrls: ['./personaliza.page.scss'],
})
export class PersonalizaPage implements OnInit {

  constructor(public router: Router) { }
  public listo = false;
  signup: UserOptionsPersonalize = { nickname: '' };
  submitted = false;

  ngOnInit() {
  }

  goHome(){
    this.router.navigateByUrl('/support');
  }

}
