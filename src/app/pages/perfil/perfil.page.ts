import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild('modal2') modal2!: ModalController;
  @ViewChild('modal3') modal3!: ModalController;
  @Input() current: string = "";

  constructor(protected modalController: ModalController) { }

  ngOnInit() {
  }

  cancel1() {
    this.modal.dismiss(null, 'cancel');    
  }
  
  cancel() {
    this.modalController.dismiss()
  } 

}
