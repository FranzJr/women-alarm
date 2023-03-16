import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';
import { UserData } from '../../providers/user-data';
@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {

  showMenu = false;

  constructor(protected modalController: ModalController,
    private userData: UserData, private router: Router) { }

  cancel() {
    this.showMenu = false;
  }

  ngOnInit() {}

  goTo(menu) {
    this.showMenu = false;
    this.router.navigateByUrl(menu);
  }

  openMenu(){
    this.showMenu = !this.showMenu;
  }

  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/login');
    });
  }
}
