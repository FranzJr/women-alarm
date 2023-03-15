import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olvido',
  templateUrl: './olvido.page.html',
  styleUrls: ['./olvido.page.scss'],
})
export class OlvidoPage implements OnInit {

  constructor(public router: Router) { }
  public listo = false;

  ngOnInit() {
  }
  
  login(){
    this.listo = !this.listo;
    this.router.navigateByUrl('/login');
  }

  setListo(){
    this.listo = !this.listo;
  }

}
