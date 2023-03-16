import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-alarm-menu',
  templateUrl: './alarm-menu.component.html',
  styleUrls: ['./alarm-menu.component.scss'],
})
export class AlarmMenuComponent implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  @ViewChild('modal2') modal2!: ModalController;
  @Input() current: string = "";

  message = 'Cancelado';


  constructor(public router: Router,
    protected modalController: ModalController) { }

  ngOnInit() { }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  close() {
    console.log("close")
    this.modalController.dismiss()

  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  confirm() {
    this.modal.dismiss("Guardado", 'confirm');
  }

  manual() {
    this.router.navigateByUrl('/alarma-manual');
  }

}
